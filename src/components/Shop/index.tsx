import React from "react";
import Filter from "../Filter";
import StoreList from "../StoreList";
import { getProducts } from "@/libs/data";

const Shop = async () => {
  // TEMP
  const productsPerView = 16;
  const products = await getProducts();

  return (
    <>
      <Filter
        productsLength={products?.length!}
        productsPerView={productsPerView}
      />
      {products && (
        <StoreList products={products} productsPerView={productsPerView} />
      )}
    </>
  );
};

export default Shop;
