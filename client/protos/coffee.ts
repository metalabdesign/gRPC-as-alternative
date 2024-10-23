import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./types/coffee";
const PORT = 8082;
const COFFEE_PROTO_FILE = "coffee.proto";
const packageDef = protoLoader.loadSync(COFFEE_PROTO_FILE, {
  keepCase: false,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: ["./protos/proto"]
});
const grpcObj = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;
export default function createCoffeeClient() {
  return new grpcObj.coffee.Coffee(
    `0.0.0.0:${PORT}`,
    grpc.credentials.createInsecure()
  );
}
