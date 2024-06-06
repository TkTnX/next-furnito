import React from "react";
import s from "./s.module.scss";
import Link from "next/link";
const Controls = ({ slug }: { slug: string }) => {
  return (
    <>
      <Link href={`/shop/${slug}`} className={s.controls}></Link>
      <div className={s.btns}>
        <div>
          <button className={s.addToCart}>Add to cart</button>
          <ul>
            <li>
              <button>Share</button>
            </li>
            <li>
              <button>Compare</button>
            </li>
            <li>
              <button>Like</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Controls;
