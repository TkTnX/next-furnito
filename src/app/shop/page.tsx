import React from "react";
import s from "./s.module.scss";
import Image from "next/image";
import Link from "next/link";
import Filter from "@/components/Filter";
import StoreList from "@/components/StoreList";

const achievementsList = [
  {
    title: "High Quality",
    desc: "crafted from top materials",
  },
  {
    title: "Warranty Protection",
    desc: "Over 2 years",
  },
  {
    title: "Free Shipping",
    desc: "Order over 150 $",
  },
  {
    title: "24 / 7 Support",
    desc: "Dedicated support",
  },
];

const ShopPage = () => {
  return (
    <>
      <div className={s.top}>
        <div className={s.text}>
          <h2 className={s.title}>Shop</h2>
          <div className={s.breadcrumbs}>
            <Link href="/">Home</Link>
            <Image
              width={8}
              height={14}
              src="/images/shop/arrow.svg"
              alt="arrow"
            />
            <p>Store</p>
          </div>
        </div>
      </div>
      <Filter />
      <StoreList />
      <div className={s.achievementsWrapper}>
        <ul className={`${s.achievements} container`}>
          {achievementsList.map((item) => (
            <li key={item.title}>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShopPage;
