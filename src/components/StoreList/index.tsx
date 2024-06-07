import React from "react";
import s from "./s.module.scss";
import Product, { ProductType } from "../Product";
const StoreList = ({
  productsPerView,
  products,
}: {
  productsPerView: number;
  products: ProductType[];
}) => {
  return (
    <div className={`container ${s.list}`}>
      {products &&
        products
          .slice(0, productsPerView)
          .map((product: ProductType) => (
            <Product
              key={product._id}
              title={product.title}
              image={product.image}
              price={product.price}
              discount={product.discount}
              slug={product.slug}
              desc={product.desc}
              _id={product._id.toString()}
              sizes={product.sizes}
            />
          ))}
    </div>
  );
};

export default StoreList;
