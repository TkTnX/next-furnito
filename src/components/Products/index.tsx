import React from "react";
import s from "./s.module.scss";
import Product from "../Product";
const Products = () => {
  return (
    <section className={`container ${s.wrapper}`}>
      <h2 className="title-2">Our Products</h2>

      <ul className={s.list}>
        {/* Products list */}
        <Product />
        <Product />
        <Product />
        <Product />
      </ul>
    </section>
  );
};

export default Products;
