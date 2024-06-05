import React from 'react'
import s from "./s.module.scss"
import Product from '../Product';
const StoreList = () => {
  return (
    <div className={`container ${s.list}`}>
      <Product title={''} image={''} price={0} />

    </div>
  );
}

export default StoreList