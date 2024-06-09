import AddProductForm from "@/components/AddProductForm";
import DeleteProductForm from "@/components/DeleteProductForm";
import React from "react";
import s from "./s.module.scss";
import { getProducts } from "@/libs/data";
import { ProductType } from "@/components/Product";
const AdminPage = async () => {
  const products = await getProducts();

  if ("error" in products) return;

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
      </div>
      <div className={s.productsList}>
        {products.length &&
          products.map((item: ProductType) => (
            <div className={s.product} key={item._id}>
              <h6><span className={s.productTitle}>Name:</span> {item.title}</h6> -<span className={s.productTitle}> Id:</span> {item._id.toString()} - <span className={s.productTitle}>Slug:</span> {item.slug}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminPage;
