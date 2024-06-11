import GoogleBtn from "@/components/GoogleButton";
import { register } from "@/libs/actions";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="container">
      <GoogleBtn text={"SignUp with Google"} />
      <p>or</p>
      <form action={register}>
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
    </div>
  );
};

export default RegisterPage;
