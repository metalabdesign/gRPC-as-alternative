"use client";
import useRandomFlavors from "./_hook/useRandomFlavors";
export default function RandomNumbers() {
  const { randomFlavorId, fetchRandomFlavors } = useRandomFlavors();
  return (
    <div className="flex justify-center flex-col  items-center">
      <h1>Random Flavors</h1>
      <button
        className=" py-2 px-4 bg-slate-300 text-black rounded my-4"
        onClick={fetchRandomFlavors}
      >
        Get Random Flavors
      </button>
      {randomFlavorId.map((randomId, index) => (
        <div key={index}>
          <p>{randomId}</p>
        </div>
      ))}
    </div>
  );
}
