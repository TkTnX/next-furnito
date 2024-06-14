import React from "react";
import { signIn } from "@/libs/auth";
import s from "./s.module.scss"
const signInFunc = async () => {
  "use server";
  await signIn("google");
};

const GoogleBtn = ({ text }: { text: string }) => {
  return (
    <form action={signInFunc}>
      <button className={s.btn}>{text}</button>
    </form>
  );
};

export default GoogleBtn;
