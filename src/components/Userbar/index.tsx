"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import s from "./s.module.scss";
import ModalCart from "../ModalCart";
const UserBar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  // TEMP

  const isAuth = false;

  useEffect(() => {
    openCart
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [openCart]);

  return (
    <>
      <ul className={s.wrapper}>
        <li>
          <Link href={isAuth ? "/profile" : "/register"}>
            <Image
              src="/images/header/04.svg"
              width={23}
              height={20}
              alt="user btn"
            />
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <Image
              src="/images/header/01.svg"
              width={23}
              height={20}
              alt="user btn"
            />
          </Link>
        </li>
        <li>
          <Link href={isAuth ? "/favorite" : "/register"}>
            <Image
              src="/images/header/02.svg"
              width={23}
              height={20}
              alt="user btn"
            />
          </Link>
        </li>
        <li>
          <button onClick={() => setOpenCart((prev) => !prev)}>
            <Image
              src="/images/header/03.svg"
              width={23}
              height={20}
              alt="user btn"
            />
          </button>
        </li>
      </ul>
      {openCart && <ModalCart setOpenCart={setOpenCart} />}
      <button
        onClick={() => setOpenMobile((prev) => !prev)}
        className={`${s.mobileBtn} ${openMobile ? s.active : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
};

export default UserBar;
