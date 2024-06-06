import { getProduct } from "@/libs/data";
import React from "react";
import s from "./s.module.scss";
import Link from "next/link";
import Image from "next/image";
import SingleProductBtns from "@/components/SingleProductBtns";
const SingleProductPage = async ({
  params,
}: {
  params: Record<string, string>;
}) => {
  const { slug } = params;
  const product = await getProduct(slug);
  return (
    <div>
      <div className={s.breadcrumbsWrapper}>
        <div className={`container ${s.breadcrumbs}`}>
          <Link className={s.breadcrumbsLink} href="/">
            Home
          </Link>
          <Image
            width={8}
            height={14}
            src="/images/shop/arrow.svg"
            alt="arrow"
          />
          <Link className={s.breadcrumbsLink} href="/shop">
            Shop
          </Link>
          <Image
            width={8}
            height={14}
            src="/images/shop/arrow.svg"
            alt="arrow"
          />
          <p className={s.productName}>{product.title}</p>
        </div>
      </div>
      <div className={`container ${s.wrapper}`}>
        <div className={s.imageWrapper}>
          <Image src={product.image} alt={product.title} fill />
        </div>
        <div className={s.right}>
          <h2 className={s.title}>{product.title}</h2>
          <p className={s.price}>Rs. {product.price}</p>
          <p className={s.desc}>{product.desc}</p>
          <SingleProductBtns />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
