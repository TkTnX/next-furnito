import React from "react";
import s from "./s.module.scss";
import Image from "next/image";
import { ProductType } from "../Product";
import { useCartStore } from "@/store";
const ModalCartItem: React.FC<ProductType> = ({
  title,
  image,
  price,
  discount,
  _id,
}) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <div className={s.item}>
      <Image
        src={image}
        width={108}
        height={105}
        alt="product"
        className={s.img}
      />
      <div className={s.info}>
        <h5>{title}</h5>
        <p>
          1 X <span>Rs. {discount ? price * +`0.${discount}` : price}</span>
        </p>
      </div>

      <button onClick={() => removeFromCart(_id)}>
        <Image
          src="/images/cartModal/close.svg"
          width={20}
          height={20}
          alt="delete"
        />
      </button>
    </div>
  );
};

export default ModalCartItem;
