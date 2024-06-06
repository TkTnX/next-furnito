import React, { useEffect } from "react";
import s from "./s.module.scss";
import Image from "next/image";
const options = [
  {
    value: "",
    name: "Default",
  },
  {
    value: "price",
    name: "↑ Price",
  },
  {
    value: "-price",
    name: "↓ Price",
  },
];

const Filter = ({
  productsPerView,
  productsLength,
}: {
  productsPerView: number;
  productsLength: number;
}) => {
  return (
    <div className={s.bg}>
      <div className="container">
        <div className={s.wrapper}>
          <p>
            Showing 1-{productsPerView} of {productsLength} results
          </p>
          <div>
            <form className={s.form}>
              <label>
                Show{" "}
                <input
                  type="number"
                  placeholder="16"
                  max={24}
                  defaultValue={productsPerView}
                  className={s.maxItemsLength}
                />
              </label>
              <label>
                Short by{" "}
                <select>
                  {options.map((option) => (
                    <option value={option.value} key={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Name
                <input type="text" placeholder="Name of product" />
              </label>
              <button>
                <Image
                  src="/images/header/01.svg"
                  alt="search"
                  width={25}
                  height={25}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
