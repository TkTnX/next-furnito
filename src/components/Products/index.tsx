import React from "react";
import s from "./s.module.scss";
import Product from "../Product";
import { getProducts } from "@/libs/data";
const Products = async () => {
  const products = await getProducts();
  return (
    <section className={`container ${s.wrapper}`}>
      <h2 className="title-2">Our Products</h2>

      <ul className={s.list}>
        {/* Products list */}
        {products &&
          products.map((item) => <Product key={item._id} {...item._doc} />)}
      </ul>
    </section>
  );
};

export default Products;
