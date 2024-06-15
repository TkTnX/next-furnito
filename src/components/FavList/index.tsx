"use client";
import React, { useEffect, useState } from "react";
import s from "./s.module.scss";
import { useFavStore } from "@/store";
import Product, { ProductType } from "../Product";
const FavList = () => {
  const [lsItems, setLsItems] = useState([]);
  const favList = useFavStore((state) => state.favItems);

  useEffect(() => {
    const items = localStorage.getItem("favItems");
    if (items) {
      setLsItems(JSON.parse(items));
    }
  }, [favList]);
  return (
    <ul className={s.list}>
      {lsItems.length === 0 && favList.length === 0 ? (
        <p>Add One Product To Favorite</p>
      ) : favList.length !== 0 ? (
        favList.map((item) => <Product isFav={true} {...item} />)
      ) : (
        lsItems.map((item: ProductType) => <Product isFav={true} {...item} />)
      )}
    </ul>
  );
};

export default FavList;
