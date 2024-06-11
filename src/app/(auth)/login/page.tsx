import GoogleBtn from "@/components/GoogleButton";
import { login } from "@/libs/actions";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <GoogleBtn text="Login with Google" />
      <form action={login}>
        <input type="text" placeholder="username" name="username" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />

        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
