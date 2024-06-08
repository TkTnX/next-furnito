import React from 'react'
import s from "./s.module.scss"
const CartTotals = () => {
  return (
    <div className={s.wrapper}>
      <h5 className={s.title}>Cart Totals</h5>

      <ul className={s.list}>
        <li>
          <p>Subotal</p>
          <p>Rs. 250,000.00</p>
        </li>
        <li>
          <p>Total</p>
          <p>Rs. 250,000.00</p>
        </li>
          </ul>
          
          <button className={s.btn}>
              Check Out
          </button>
    </div>
  );
}

export default CartTotals