import AddProductForm from "@/components/AddProductForm";
import DeleteProductForm from "@/components/DeleteProductForm";
import React from "react";
import s from "./s.module.scss"
const AdminPage = () => {
  return (
    <div className={s.wrapper}>
      <h3>Создание продукта</h3>
      <AddProductForm />
      <h3>Удаление продукта</h3>
      <DeleteProductForm />
    </div>
  );
};

export default AdminPage;
