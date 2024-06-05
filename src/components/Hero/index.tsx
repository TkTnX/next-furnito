import React from "react";
import s from "./s.module.scss";
import Link from "next/link";
const Hero = () => {
  return (
    <section className={s.wrapper}>
      <div className={`container ${s.block}`}>
        <h2 className={s.hint}>New Arrival</h2>
        <h1 className={s.title}>
          Discover Our <br /> New Collection
        </h1>
        <p className={s.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <Link className={s.btn} href="/shop">BUY NOW</Link>
      </div>
    </section>
  );
};

export default Hero;
