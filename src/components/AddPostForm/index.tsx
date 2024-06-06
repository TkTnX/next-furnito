"use client";
import React from "react";
import s from "./s.module.scss";
import { addPost } from "@/libs/actions";
import { useFormState } from "react-dom";
const AddPostForm = () => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className={s.form}>
      <input type="text" placeholder="title" name="title" required />
      <input type="text" placeholder="desc" name="desc" required />
      <input type="text" placeholder="image" name="image" required />
      <input type="number" placeholder="price" name="price" required />
      <input type="text" placeholder="slug" name="slug" required />
      <input type="number" placeholder="discount*" name="discount" />
      <button type="submit">Добавить продукт</button>
      {state && state.error}
    </form>
  );
};

export default AddPostForm;
