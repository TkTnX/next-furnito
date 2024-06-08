import React from "react";
import s from "./s.module.scss";
import CartItems from "../CartItems";
import CartTotals from "../CartTotals";
const Cart = () => {
  return (
    <div className={`container ${s.cart}`}>
      {/* LEFT */}
      <div className={s.left}>
        {/* TOP */}
        <div className={s.top}>
          <ul className={s.infoList}>
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>
        </div>
        <CartItems />
      </div>
      {/* RIGHT */}
      <CartTotals />
    </div> 
  );
};

export default Cart;
