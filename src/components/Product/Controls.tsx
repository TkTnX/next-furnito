"use client";
import React from "react";
import s from "./s.module.scss";
import Link from "next/link";
import { useCartStore, useFavStore } from "@/store";
import { ProductType } from ".";
const Controls = ({
  slug,
  props,
  isFav = false,
}: {
  slug: string;
  props: ProductType;
  isFav?: boolean;
}) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const addToFav = useFavStore((state) => state.addToFav);
  const removeFromFav = useFavStore((state) => state.removeFromFav);
  return (
    <>
      <Link href={`/shop/${slug}`} className={s.controls}></Link>
      <div className={s.btns}>
        <div>
          <button onClick={() => addToCart(props)} className={s.addToCart}>
            Add to cart
          </button>
          <ul>
            {isFav ? (
              <li>
                <button onClick={() => removeFromFav(props._id)}>
                  Dislike
                </button>
              </li>
            ) : (
              <>
                <li>
                  <button>Share</button>
                </li>
                <li>
                  <button>Compare</button>
                </li>
                <li>
                  <button onClick={() => addToFav(props)}>Like</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Controls;
