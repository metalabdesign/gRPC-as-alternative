import { PriceResponse } from "@/protos/types/coffee/PriceResponse";
interface CoffeeFormProps {
  action: (formData: FormData) => Promise<PriceResponse | any>;
}
export default function CoffeeForm({ action }: CoffeeFormProps) {
  return (
    <form
      action={action}
      className="flex flex-col justify-center items-center border-2 rounded-lg border-slate-300 border-dashed p-8 gap-4"
    >
      <label>How many coffees do you want?</label>
      <input
        className="text-black text-center"
        type="number"
        name="numberOfCoffees"
      />
      <button className="px-4 py-2 bg-slate-300 text-black rounded">
        Get order price
      </button>
    </form>
  );
}
