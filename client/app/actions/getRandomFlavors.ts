"use server";
import createCoffeeClient from "@/protos/coffee";
export default async function getRandomFlavors(
  numberOfOptions?: number
): Promise<ReadableStream> {
  const { readable, writable } = new TransformStream();
  const encoder = new TextEncoder();
  const writer = writable.getWriter();
  const coffeeClient = createCoffeeClient();
  const randomNumbersStream = coffeeClient.RandomFlavors({
    numberOfOptions: numberOfOptions || 10
  });
  randomNumbersStream.on("data", (chunk) => {
    console.log("on data:", chunk);
    writer.write(encoder.encode(chunk?.randomId));
  });
  randomNumbersStream.on("close", () => {
    console.log("on close");
  });
  return readable;
}
