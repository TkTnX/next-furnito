"use client";
import React from "react";
import s from "./s.module.scss";
import Link from "next/link";
import { useCartStore } from "@/store";
import { ProductType } from ".";
const Controls = ({ slug, props }: { slug: string; props: ProductType }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <>
      <Link href={`/shop/${slug}`} className={s.controls}></Link>
      <div className={s.btns}>
        <div>
          <button onClick={() => addToCart(props)} className={s.addToCart}>
            Add to cart
          </button>
          <ul>
            <li>
              <button>Share</button>
            </li>
            <li>
              <button>Compare</button>
            </li>
            <li>
              <button>Like</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Controls;
