"use client";
import { Product } from "@/types";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { Trash, X } from "lucide-react";
import IconButton from "@/components/ui/IconButton";
import Currency from "@/components/ui/Currency";
import useCart from "@/hooks/useCart";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-4 border-b ">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          src={data.images[0].url}
          alt={data.name}
          fill
          objectFit="scale-down"
          className="object-cover object-center"
        />
      </div>
      <div className="relative  flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute ml-20 z-10 right-0 top-8 ">
          <IconButton
            onClick={onRemove}
            icon={
              <Trash size={15} className="text-gray-700 hover:text-red-700" />
            }
          />
        </div>
        <div className="relative pr-9 mt-8  sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex  justify-between">
            <h4 className="text-black text-lg font-semibold">{data.name}</h4>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-700">{data.color.name}</p>
            <p className="text-gray-700 ml-4 border-l border-gray-400 pl-4">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
