import Image from "next/image";
import React from "react";
import s from "./s.module.scss";
import Controls from "./Controls";
import { ObjectId } from "mongoose";

export type ProductType = {
  _doc: ProductType;
  _id: ObjectId;
  title: string;
  image: string;
  price: number;
  discount?: number;
  slug: string;
  desc: string;
  sizes: string[];
};

const Product: React.FC<ProductType> = ({
  title,
  image,
  price,
  discount,
  slug,
  desc,
}) => {
  return (
    <div className={s.item}>
      <div className={s.img}>
        <Image src={image} sizes="any" alt={title} fill />
      </div>
      <div className={s.onHover}>
        <Controls slug={slug} />
      </div>
      <div className={s.bottom}>
        <h5 className={s.title}>{title}</h5>
        <p className={s.desc}>{desc}</p>
        <div className={s.prices}>
          <h6>Rp {discount ? price * +`0.${discount}` : price}</h6>
          {discount && <p>Rp {price}</p>}
        </div>
      </div>
    </div>
  );
};

export default Product;
