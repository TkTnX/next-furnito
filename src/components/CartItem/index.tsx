import React from "react";
import s from "./s.module.scss";
import Image from "next/image";
const CartItem = () => {
  return (
    <div className={s.item}>
      {/* NAME */}
      <div className={s.name}>
        <Image
          src={"/images/temp-products/01.jpg"}
          alt=""
          width={111}
          height={90}
        />
        <h6>Asgaard sofa</h6>
      </div>
      {/* price */}
      <p>Rs. 250,000.00</p>
      {/* quantity */}
      <input className={s.quantityInp} type="number" placeholder="1" defaultValue={1} />
      {/* subtotal */}
      <p className={s.subtotal}>Rs. 250,000.00</p>
      <button>
        <Image src={"/images/cart/del.svg"} alt="" width={21} height={21} />
      </button>
    </div>
  );
};

export default CartItem;
