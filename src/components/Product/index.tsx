import Image from "next/image";
import React from "react";
import s from "./s.module.scss";
import Controls from "./Controls";

export type ProductType = {
  title: string;
  image: string;
  price: number;
  discount?: number;
};

const Product: React.FC<ProductType> = ({ title, image, price, discount }) => {
  return (
    <div className={s.item}>
      <div className={s.img}>
        <Image src={image} sizes="any" alt={title} fill />
      </div>
      <div className={s.onHover}>
        <Controls />
      </div>
      <div className={s.bottom}>
        <h5 className={s.title}>{title}</h5>
        <p className={s.desc}>Stylish cafe chair</p>
        <div className={s.prices}>
          {discount && <h6>Rp {price * +`0.${discount}`}</h6>}
          <p>Rp {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
