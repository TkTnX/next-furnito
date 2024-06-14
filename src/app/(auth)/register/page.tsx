import GoogleBtn from "@/components/GoogleButton";
import { register } from "@/libs/actions";
import React from "react";
import s from "./s.module.scss";
import Link from "next/link";
const RegisterPage = () => {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <GoogleBtn text={"SignUp with Google"} />
        <p>or</p>
        <form className={s.form} action={register}>
          <input type="text" placeholder="avatar url" name="avatarUrl" />
          <input type="text" placeholder="username" name="username" required />
          <input type="email" placeholder="email" name="email" required />
          <input
            type="password"
            placeholder="password"
            name="password"
            required
          />
          <input
            type="password"
            placeholder="passwordAgain"
            name="passwordAgain"
            required
          />
          <button>Register</button>
        </form>
        <p className={s.link}>
          Already have account? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
