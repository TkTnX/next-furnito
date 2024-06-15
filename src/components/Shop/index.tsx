import React from "react";
import Filter from "../Filter";
import StoreList from "../StoreList";
import { getProducts } from "@/libs/data";

const Shop = async () => {
  const products = await getProducts();
  // TEMP
  const productsPerView = 20;

  if ("error" in products) {
    return;
  }

  return (
    <>
      <Filter
        productsLength={products.length}
        productsPerView={productsPerView}
      />
      {products && (
        <StoreList products={products} productsPerView={productsPerView} />
      )}
    </>
  );
};

export default Shop;
