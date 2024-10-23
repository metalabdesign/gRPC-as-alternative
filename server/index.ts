import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./protos/proto/coffee";
import { CoffeeHandlers } from "./protos/proto/coffee/Coffee";

const PORT = 8082;
const PROTO_FILE = "./protos/proto/coffee.proto";
const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;
const coffeePackage = grpcObj.coffee;

function getServer() {
  const server = new grpc.Server();
  server.addService(coffeePackage.Coffee.service, {
    Price: (req, res) => {
      const numberOfCoffees = req?.request?.numberOfCoffees || 0;
      const coffeePrice = 20;
      res(null, {
        price: `$${numberOfCoffees * coffeePrice}`
      });
    },
    RandomFlavors: (call) => {
      const { numberOfOptions = 10 } = call.request;
      let runCount = 0;
      const id = setInterval(() => {
        runCount = ++runCount;
        call.write({
          randomId: Math.floor(Math.random() * 1000)
        });
        if (runCount >= numberOfOptions) {
          clearInterval(id);
          call.end();
        }
      }, 500);
    }
  } as CoffeeHandlers);
  return server;
}

function main() {
  const server = getServer();

  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Server running in ${port}`);
    }
  );
}

main();
