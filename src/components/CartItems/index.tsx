import React from 'react'
import s from "./s.module.scss"
import CartItem from '../CartItem'
const CartItems = () => {
  return (
      <div className={s.items}>
          <CartItem />
    </div>
  )
}

export default CartItems