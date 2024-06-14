import React from "react";
import s from "./s.module.scss";
import { data } from "../Navbar";
import Link from "next/link";
import Image from "next/image";
const MobileMenu = ({
  setOpenMobile,
  isAuth,
  isAdmin,
}: {
  setOpenMobile: (b: boolean) => void;
  isAuth: boolean;
  isAdmin: boolean;
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
            href={isAuth ? "/profile" : "/register"}
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
      {isAdmin && (
        <Link onClick={() => setOpenMobile(false)} href="/admin">
          Admin panel
        </Link>
      )}
    </div>
  );
};

export default MobileMenu;
