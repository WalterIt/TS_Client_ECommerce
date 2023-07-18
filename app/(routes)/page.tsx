import getBillboard from "@/actions/GetBillboard";
import getProducts from "@/actions/GetProducts";
import Billboard from "@/components/ui/Billboard";
import Container from "@/components/ui/Container";
import ProductList from "@/components/ui/ProductList";
import React from "react";

export const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("bfe23158-36ff-48a6-94d3-d467ecfa16f6");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
