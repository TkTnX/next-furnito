import React from 'react'
import s from "./s.module.scss"
import Product from '../Product';
const StoreList = () => {
  return (
    <div className={`container ${s.list}`}>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default StoreList