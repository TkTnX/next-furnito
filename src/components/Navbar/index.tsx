"use client";
import React from "react";
import s from "./s.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/shop",
    name: "Shop",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <ul className={s.wrapper}>
      {data.map((item) => (
        <li
          className={`${pathname === item.path ? s.active : "d"}`}
          key={item.name}
        >
          <Link href={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
