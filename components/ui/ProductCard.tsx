"use client";
import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/usePreviewModal";
import useCart from "@/hooks/useCart";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const cart = useCart();
  const previewModal = usePreviewModal();
  const router = useRouter();

  const hanleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div
      onClick={hanleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 "
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        {/* -- Image --  */}
        <Image
          alt={data.name}
          fill
          objectFit="scale-down"
          src={data?.images?.[0]?.url}
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 ">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />

            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* -- Description --  */}
      <div className="">
        <p className="font-semibold text-lg truncate ">{data.name}</p>
        <p className="text-sm text-gray-600">{data.category.name}</p>
      </div>
      {/* -- Price --  */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
