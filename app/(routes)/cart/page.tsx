"use client";
import Container from "@/components/ui/Container";
import useCart from "@/hooks/useCart";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Summary from "./Summary";

const CartPage = () => {
  const cart = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-10">
            <div className="lg:col-span-7">
              {!cart.items.length && (
                <p className="text-2xl text-gray-600">No items in Cart!</p>
              )}
              <ul className="mt-6 space-y-4">
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
