import React from "react";
import s from "./s.module.scss";
import Product, { ProductType } from "../Product";
const StoreList = ({ productsPerView, products }: { productsPerView: number, products: ProductType[] }) => {

  return (
    <div className={`container ${s.list}`}>
      {products &&
        products
          .slice(0, productsPerView)
          .map((product: ProductType) => (
            <Product key={product._id.toString()} {...product._doc} />
          ))}
    </div>
  );
};

export default StoreList;
