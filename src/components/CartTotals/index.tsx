"use client";
import React from "react";
import s from "./s.module.scss";
import { useCartStore } from "@/store";
const CartTotals = () => {
  const totalPrice = useCartStore((state) => state.totalPrice);
  return (
    <div className={s.wrapper}>
      <h5 className={s.title}>Cart Totals</h5>

      <ul className={s.list}>
        <li>
          <p>Subotal</p>
          <p className={s.subtotal}>Rs. {totalPrice}</p>
        </li>
        <li>
          <p>Total</p>
          <p className={s.total}>Rs. {totalPrice}</p>
        </li>
      </ul>

      <button className={s.btn}>Check Out</button>
    </div>
  );
};

export default CartTotals;
