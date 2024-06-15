import FavList from "@/components/FavList";
import React from "react";
import s from "./s.module.scss"
const favPage = () => {
  return (
    <div className="container">
      <h2 className={s.title}>Favorite Products</h2>
      <FavList />
    </div>
  );
};

export default favPage;
