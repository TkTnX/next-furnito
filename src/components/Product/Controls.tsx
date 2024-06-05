import React from "react";
import s from "./s.module.scss";
const Controls = () => {
  return (
    <div className={s.controls}>
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
  );
};

export default Controls;
