"use server";
import { connectToDb } from "./connectToDB";
import { Product } from "./models";
export const addPost = async (prevState, formData) => {
  const { title, desc, image, price, slug, discount, sizes } =
    Object.fromEntries(formData);

  try {
    connectToDb();

    const newProduct = new Product({
      title,
      desc,
      image,
      price,
      slug,
      discount,
      sizes: sizes.split(", "),
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    return { error: "Не удалось создать продукт" };
  }
};
