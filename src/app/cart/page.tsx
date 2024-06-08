import React from "react";
import s from "./s.module.scss";
import Link from "next/link";
import Image from "next/image";
import Cart from "@/components/Cart";
const CartPage = () => {
  return (
    <div>
      {/* TOP */}
      <div className={s.top}>
        <div className={s.text}>
          <h2 className={s.title}>Cart</h2>
          <div className={s.breadcrumbs}>
            <Link href="/">Home</Link>
            <Image
              width={8}
              height={14}
              src="/images/shop/arrow.svg"
              alt="arrow"
            />
            <p>Cart</p>
          </div>
        </div>
      </div>
      <div className={s.cart}>
        <Cart />
      </div>
    </div>
  );
};

export default CartPage;
