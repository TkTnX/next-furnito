"use client";
import React, { useState } from "react";
import s from "./s.module.scss"
const SingleProductSizes = ({ sizes }: { sizes: string[] }) => {
  const [selectedSize, setSelectedSize] = useState(0);
  return (
    <div className={s.wrapper}>
      <h5>Size</h5>
      <ul className={s.list}>
        {sizes.map((size, index) => (
          <li key={index}>
            <button
              className={`${s.size} ${selectedSize === index ? s.active : ""}`}
              onClick={() => setSelectedSize(index)}
            >
              {size}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleProductSizes;
