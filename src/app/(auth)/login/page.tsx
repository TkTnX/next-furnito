import GoogleBtn from "@/components/GoogleButton";
import { login } from "@/libs/actions";
import React from "react";
import s from "./s.module.scss";
import Link from "next/link";
const LoginPage = () => {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <GoogleBtn text="Login with Google" />
        <form className={s.form} action={login}>
          <input type="text" placeholder="username" name="username" required />
          <input
            type="password"
            placeholder="password"
            name="password"
            required
          />

          <button>Login</button>
        </form>
        <p className={s.link}>
          Don't have account? <Link href="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
