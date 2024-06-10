import React from "react";
import { signIn } from "@/libs/auth";
const signInFunc = async () => {
  "use server";
  await signIn("google");
};

const GoogleBtn = () => {
  return (
    <form action={signInFunc}>
      <button>Signin with Google</button>
    </form>
  );
};

export default GoogleBtn;
