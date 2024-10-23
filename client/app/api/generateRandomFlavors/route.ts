import getRandomNumbers from "@/app/actions/getRandomFlavors";
import { NextRequest } from "next/server";
interface RandomNumbersRequest {
  numberOfOptions: number;
}
export async function POST(req: NextRequest) {
  const request: RandomNumbersRequest = await req.json();
  const readable = await getRandomNumbers(request?.numberOfOptions);
  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
      "Cache-Control": "no-cache, no-transform"
    }
  });
}
