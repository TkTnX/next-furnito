import Image from "next/image";
import React from "react";
import s from "./s.module.scss";
import Link from "next/link";
import Navbar from "../Navbar";
import UserBar from "../Userbar";
const Header = () => {
  return (
    <header className={`container ${s.wrapper}`}>
      <Link className={s.logo} href="/">
        <Image src="/images/logo.svg" width={50} height={30} alt="logo" />
        <h4 className={s.title}>Furnito</h4>
      </Link>
      <nav>
        <Navbar />
      </nav>
      <nav>
        <UserBar />
      </nav>
    </header>
  );
};

export default Header;
