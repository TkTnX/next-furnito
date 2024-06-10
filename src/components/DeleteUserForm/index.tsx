"use client";
import React, { useState } from "react";
import s from "./s.module.scss";
import { deleteUser } from "@/libs/actions";
import { useFormState } from "react-dom";
const DeleteUserForm = () => {
  const [state, formAction] = useFormState(deleteUser, undefined);
  const [val, setVal] = useState("");
  return (
    <form action={formAction} className={s.form}>
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        type="text"
        placeholder="id пользователя"
        name="id"
      />
      <button disabled={val.length === 0} type="submit">
        Удалить пользователя
      </button>
      {state && state.error}
    </form>
  );
};

export default DeleteUserForm;
