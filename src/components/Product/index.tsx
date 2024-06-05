import Image from "next/image";
import React from "react";
import s from "./s.module.scss";
import Controls from "./Controls";
const Product = () => {
  return (
    <div className={s.item}>
      <div className={s.img}>
        <Image src="/images/Products/01.jpg" sizes="any" alt="title" fill />
      </div>
      <div className={s.onHover}>
        <Controls />
      </div>
      <div className={s.bottom}>
        <h5 className={s.title}>Syltherine</h5>
        <p className={s.desc}>Stylish cafe chair</p>
        <div className={s.prices}>
          <h6>Rp 2.500.000</h6>
          <p>Rp 3.500.000</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
