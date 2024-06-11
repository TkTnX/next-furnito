import React from "react";
import s from "./s.module.scss";
import { data } from "../Navbar";
import Link from "next/link";
import Image from "next/image";
const MobileMenu = ({
  setOpenMobile,
  isAuth,
}: {
  setOpenMobile: (b: boolean) => void;
  isAuth: string;
}) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {data.map((item) => (
          <li key={item.name}>
            <Link onClick={() => setOpenMobile(false)} href={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={s.userList}>
        <li>
          <Link
            onClick={() => setOpenMobile(false)}
            href={isAuth === "authenticated" ? "/profile" : "/register"}
          >
            <Image
              src="/images/header/04.svg"
              width={23}
              height={20}
              alt="user btn"
            />
          </Link>
        </li>
        <li>
          <Link onClick={() => setOpenMobile(false)} href="/shop">
            <Image
              src="/images/header/01.svg"
              width={23}
              height={20}
              alt="user btn"
            />
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setOpenMobile(false)}
            href={isAuth ? "/favorite" : "/register"}
          >
            <Image
              src="/images/header/02.svg"
              width={23}
              height={20}
              alt="user btn"
            />
          </Link>
        </li>
        <li>
          <Link onClick={() => setOpenMobile(false)} href="/cart">
            <Image
              src="/images/header/03.svg"
              width={23}
              height={20}
              alt="user btn"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
