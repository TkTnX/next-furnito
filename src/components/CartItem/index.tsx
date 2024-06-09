"use client";
import React, { useState } from "react";
import s from "./s.module.scss";
import Image from "next/image";
import { useCartStore } from "@/store";
const CartItem = ({
  image,
  title,
  price,
  _id,
}: {
  price: number;
  title: string;
  image: string;
  _id: string;
  }) => {
  const [inpVal, setInpVal] = useState(1)
  const handleRemoveFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <div className={s.item}>
      {/* NAME */}
      <div className={s.name}>
        <Image
          className={s.img}
          src={image}
          alt={title}
          width={111}
          height={90}
        />
        <h6>{title}</h6>
      </div>
      {/* price */}
      <p>Rs. {price * inpVal}</p>
      {/* quantity */}
      <input
        value={inpVal}
        onChange={(e) => setInpVal(Number(e.target.value))}
        className={s.quantityInp}
        type="number"
        placeholder="1"
        min={1}
        max={5}
      />
      {/* subtotal */}
      <p className={s.subtotal}>Rs. {price * inpVal}</p>
      <button onClick={() => handleRemoveFromCart(_id.toString())}>
        <Image src={"/images/cart/del.svg"} alt="" width={21} height={21} />
      </button>
    </div>
  );
};

export default CartItem;
