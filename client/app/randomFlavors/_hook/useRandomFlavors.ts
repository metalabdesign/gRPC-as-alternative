import { useState } from "react";

async function* readStream(reader: ReadableStreamDefaultReader<Uint8Array>) {
  const textDecoder = new TextDecoder();
  let done = false;
  while (!done) {
    const { value, done: readerDone } = await reader.read();
    done = readerDone;
    if (value) {
      yield textDecoder.decode(value, { stream: true });
    }
  }
}

const useRandomFlavors = () => {
  const [randomFlavorId, setRandomFlavorId] = useState<Array<string>>([]);
  const fetchRandomFlavors = async () => {
    setRandomFlavorId(() => []);
    try {
      const response = await fetch("/api/generateRandomFlavors", {
        method: "POST",
        body: JSON.stringify({ numberOfOptions: 5 })
      });
      const randomFlavorsReadable = response?.body?.getReader();
      if (randomFlavorsReadable) {
        for await (const value of readStream(randomFlavorsReadable)) {
          console.log("on client", value);
          setRandomFlavorId((prev) => [...prev, value]);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return {
    randomFlavorId,
    fetchRandomFlavors
  };
};
export default useRandomFlavors;
