import { PriceRequest } from "@/protos/types/coffee/PriceRequest";
import CoffeeForm from "./_components/CoffeeForm";
import getCoffeePrice from "@/app/price/_actions/getCoffeePrice";
import { redirect } from "next/navigation";
interface ChatProps {
  searchParams: Promise<PriceRequest>;
}
export default async function Chat(props: ChatProps) {
  const searchParams = await props.searchParams;
  const { numberOfCoffees } = searchParams;

  async function priceResponse(formData: FormData) {
    "use server";
    const numberOfCoffeesForm = formData.get("numberOfCoffees") || "0";
    redirect(`/price?numberOfCoffees=${numberOfCoffeesForm}`);
  }
  const coffeePrice = await getCoffeePrice({ numberOfCoffees });
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <CoffeeForm action={priceResponse} />
      <p className="text-xl pt-8">Total is: {coffeePrice?.price}</p>
    </div>
  );
}
