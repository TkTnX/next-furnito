import React from "react";
import { signIn } from "@/libs/auth";
const signInFunc = async () => {
  "use server";
  await signIn("google");
};

const GoogleBtn = ({ text }: { text: string }) => {
  return (
    <form action={signInFunc}>
      <button>{text}</button>
    </form>
  );
};

export default GoogleBtn;
