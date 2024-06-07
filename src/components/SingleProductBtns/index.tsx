"use client";
import React, { useState } from "react";
import s from "./s.module.scss";
import { useCartStore } from "@/store";
import { ProductType } from "../Product";
const SingleProductBtns = ({ product }: { product: ProductType }) => {
  const [count, setCount] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleChangeCount = (arg: "i" | "d") => {
    if (arg === "d" && count !== 1) {
      setCount((prev) => prev - 1);
    } else if (arg === "i" && count !== 5) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div className={s.btns}>
      <div className={s.counter}>
        {/* Counter */}
        <button onClick={() => handleChangeCount("d")}>-</button>
        <p>{count}</p>
        <button onClick={() => handleChangeCount("i")}>+</button>
      </div>
      <button onClick={() => addToCart(product)} className={s.addToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default SingleProductBtns;
