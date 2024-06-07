"use server";
import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDB";
import { Product } from "./models";
export const addProduct = async (prevState, formData) => {
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

    revalidatePath("/shop");
    await newProduct.save();
  } catch (error) {
    console.log(error);
    return { error: "Не удалось создать продукт" };
  }
};

export const deleteProduct = async (prevState, formData) => {
  const { slug } = Object.fromEntries(formData);
  try {
    connectToDb();

    await Product.findOneAndDelete({ slug: slug });
    revalidatePath("/shop");
    return { error: "Продукт удалён" };
  } catch (error) {
    console.log(error);
    return { error: "Не удалось удалить продукт" };
  }
};
