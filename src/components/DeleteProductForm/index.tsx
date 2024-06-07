"use client";
import React, { useState } from "react";
import s from "./s.module.scss";
import { deleteProduct } from "@/libs/actions";
import { useFormState } from "react-dom";
const DeleteProductForm = () => {
  const [state, formAction] = useFormState(deleteProduct, undefined);
  const [val, setVal] = useState("");
  return (
    <form action={formAction} className={s.form}>
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        type="text"
        placeholder="slug"
        name="slug"
      />
      <button disabled={val.length === 0} type="submit">
        Удалить продукт
      </button>
      {state && state.error}
    </form>
  );
};

export default DeleteProductForm;
