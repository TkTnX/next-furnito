"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import s from "./s.module.scss";
import ModalCart from "../ModalCart";
import MobileMenu from "../MobileMenu";
import { useSession } from "next-auth/react";
const UserBar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const { data, status } = useSession();

  const isAuth = status === "authenticated";
  useEffect(() => {
    openCart || openMobile
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [openCart, openMobile]);

  return (
    <>
      <ul className={s.wrapper}>
        <li>
          <Link href={isAuth ? "/profile" : "/register"}>
            <Image
              src={`${
                data?.user?.image! ? data.user.image : "/images/header/04.svg"
              }`}
              width={26}
              height={24}
              alt="user btn"
              className={isAuth && data?.user?.image ? s.userImg : ""}
            />
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <Image
              src="/images/header/01.svg"
              width={25}
              height={25}
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
        {/* @ts-ignore */}
        {data?.user?.isAdmin ? (
          <Link href="/admin">Admin Panel</Link>
        ) : (
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
        )}
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
      {openMobile && (
        <MobileMenu
          // @ts-ignore
          isAdmin={data?.user?.isAdmin}
          isAuth={isAuth}
          setOpenMobile={setOpenMobile}
        />
      )}
    </>
  );
};

export default UserBar;
