"use client";
import React, { useEffect, useRef } from "react";
import s from "./s.module.scss";
import Image from "next/image";
import ModalCartItem from "../ModalCartItem";
import Link from "next/link";

const data = ["Cart", "Checkout", "Comparison"];

const ModalCart = ({ setOpenCart }: { setOpenCart: (b: boolean) => void }) => {
  const cartRef = useRef<HTMLDivElement>(null);

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
        <div className={s.items}>
          <ModalCartItem />
        </div>

        {/* BOTTOM */}
        <div className={s.bottom}>
          <div className={s.total}>
            <p>Subtotal</p>
            <span>Rs. 520,000.00</span>
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
