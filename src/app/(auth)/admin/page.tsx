import AddProductForm from "@/components/AddProductForm";
import DeleteProductForm from "@/components/DeleteProductForm";
import React from "react";
import s from "./s.module.scss";
import { getProducts, getUsers } from "@/libs/data";
import { ProductType } from "@/components/Product";
import DeleteUserForm from "@/components/DeleteUserForm";
const AdminPage = async () => {
  const products = await getProducts();
  const users = await getUsers();

  if ("error" in products || "error" in users) return;

  return (
    <div className={`container ${s.wrapper}`}>
      <div className={s.controls}>
        <div className={s.formWrapper}>
          <h3 className={s.title}>Создание продукта</h3>
          <AddProductForm />
        </div>
        <div className={s.formWrapper}>
          <h3 className={s.title}>Удаление продукта</h3>
          <DeleteProductForm />
        </div>
        <div className={s.formWrapper}>
          <h3 className={s.title}>Удаление пользователя</h3>
          <DeleteUserForm />
        </div>
      </div>
      <div className={s.productsList}>
        <h2 className={s.title}>Товары</h2>

        {products.length &&
          products.map((item: ProductType) => (
            <div className={s.product} key={item._id}>
              <h6>
                <span className={s.productTitle}>Name:</span> {item.title}
              </h6>{" "}
              -<span className={s.productTitle}> Id:</span>{" "}
              {item._id.toString()} -{" "}
              <span className={s.productTitle}>Slug:</span> {item.slug}
            </div>
          ))}
        <h2 className={s.title}>Пользователи</h2>
        {users.length &&
          users.map((user) => (
            <div className={s.product} key={user._id}>
              <h6>
                <span className={s.productTitle}>username:</span>{" "}
                {user.username}
              </h6>{" "}
              -<span className={s.productTitle}> Id:</span>{" "}
              {user._id.toString()}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminPage;
