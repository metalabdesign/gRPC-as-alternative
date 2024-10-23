"use server";
import createCoffeeClient from "@/protos/coffee";
import { PriceRequest } from "@/protos/types/coffee/PriceRequest";
import { PriceResponse } from "@/protos/types/coffee/PriceResponse";
export default async function getCoffeePrice({
  numberOfCoffees
}: PriceRequest): Promise<PriceResponse> {
  const coffeeClient = createCoffeeClient();
  return new Promise((resolve, reject) => {
    coffeeClient.Price({ numberOfCoffees }, (err, response) => {
      if (err) reject(err);
      if (response) resolve(response);
    });
  });
}
