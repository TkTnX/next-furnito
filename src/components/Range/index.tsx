import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "./s.module.scss";
const data = [
  {
    title: "Dining",
    img: "/images/range/01.jpg",
  },
  {
    title: "Living",
    img: "/images/range/02.jpg",
  },
  {
    title: "Bedroom",
    img: "/images/range/03.jpg",
  },
];

const Range = () => {
  return (
    <section className={`container ${s.wrapper}`}>
      <h3 className={s.title}>Browse The Range</h3>
      <p className={s.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <ul className={s.list}>
        {data.map((item) => (
          <li className={s.liItem} key={item.title}>
            <div className={s.item}>
              <Link className={s.link} href="/shop">
                <Image src={item.img} className={s.img} fill alt={item.title} />
              </Link>
              <h6 className={s.itemTitle}>{item.title}</h6>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Range;
