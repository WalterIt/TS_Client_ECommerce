"use client";
import Button from "@/components/ui/Button";
import Currency from "@/components/ui/Currency";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import useCart from "@/hooks/useCart";
import { toast } from "react-hot-toast";

const Summary = () => {
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment Completed!");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong!");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:px-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-400 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        disabled={!items.length}
        onClick={onCheckout}
        className="w-full mt-10"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
