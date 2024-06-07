"use client";
import React, { useEffect, useRef } from "react";
import s from "./s.module.scss";
import Image from "next/image";
import ModalCartItem from "../ModalCartItem";
import Link from "next/link";
import { useCartStore } from "@/store";

// bottom btns
const data = ["Cart", "Checkout", "Comparison"];

const ModalCart = ({ setOpenCart }: { setOpenCart: (b: boolean) => void }) => {
  const cartRef = useRef<HTMLDivElement>(null);
  const cartItems = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice);

  const handleClickOutside = (event: MouseEvent) => {
    if (cartRef.current && !cartRef.current?.contains(event.target as Node)) {
      setOpenCart(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className={s.backdrop}>
      <div ref={cartRef} className={s.cart}>
        <div className={s.top}>
          <h2>Shopping Cart</h2>
          <button>
            <Image
              src="/images/header/cart.svg"
              width={16}
              height={19}
              alt="clear cart"
            />
          </button>
        </div>
        {/* ITEMS */}
        {cartItems.length === 0 ? (
          <p className={s.emptyCart}>
            Корзина пуста! <br /> добавьте 1 товар в корзину
          </p>
        ) : (
          <div className={s.items}>
            {cartItems.map((item) => (
              <ModalCartItem {...item} _id={item._id} key={item._id} />
            ))}
          </div>
        )}

        {/* BOTTOM */}
        <div className={s.bottom}>
          <div className={s.total}>
            <p>Subtotal</p>
            <span>Rs. {totalPrice}</span>
          </div>
          <div className={s.links}>
            {data.map((item) => (
              <Link onClick={() => setOpenCart(false)} href="/cart" key={item}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
