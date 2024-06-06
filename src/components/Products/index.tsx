import React from "react";
import s from "./s.module.scss";
import Product, { ProductType } from "../Product";
import { getProducts } from "@/libs/data";
const Products = async () => {
  const products = await getProducts();
  return (
    <section className={`container ${s.wrapper}`}>
      <h2 className="title-2">Our Products</h2>

      <ul className={s.list}>
        {/* Products list */}
        {products &&
          products
            .slice(0, 8)
            .map((item: ProductType) => (
              <Product key={item._id.toString()} {...item._doc} />
            ))}
      </ul>
    </section>
  );
};

export default Products;
