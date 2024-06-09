"use client";
import React from "react";
import s from "./s.module.scss";
import CartItem from "../CartItem";
import { useCartStore } from "@/store";
const CartItems = () => {
  const products = useCartStore((state) => state.items);
  return (
    <>
      {products.length === 0 ? (
        <p className={s.empty}>Cart is Empty!</p>
      ) : (
        <div className={s.items}>
          {products.map((item) => (
            <CartItem {...item} key={item._id} />
          ))}
        </div>
      )}
    </>
  );
};

export default CartItems;
