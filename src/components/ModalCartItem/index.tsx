import React from "react";
import s from "./s.module.scss";
import Image from "next/image";
const ModalCartItem = () => {
  return (
    <div className={s.item}>
      <Image
        src="/images/temp-products/01.jpg"
        width={108}
        height={105}
        alt="product"
      />
      <div className={s.info}>
        <h5>Asgaard sofa</h5>
        <p>
          1 X <span>Rs. 250,000.00</span>
        </p>
      </div>

      <button>
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
