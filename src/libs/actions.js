"use server";
import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDB";
import { Product, User } from "./models";
import bcrypt from "bcrypt";
import { signIn } from "@/libs/auth";
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

export const deleteUser = async (prevState, formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();

    await User.findOneAndDelete({ _id: id });
    revalidatePath("/admin");
    return { error: "Пользователь удалён" };
  } catch (error) {
    console.log(error);
    return { error: "Не удалось удалить пользователя" };
  }
};

export const register = async (formData) => {
  const { username, email, password, passwordAgain, avatarUrl } =
    Object.fromEntries(formData);

  if (password !== passwordAgain) {
    return "Passwords do not match";
  }
  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return "User already exist!";
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashPassword,
      avatarUrl,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    return { error: "Failed to register" };
  }
};

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", {
      username,
      password,

    });
  } catch (error) {
    console.log(error);
    return { error: "Failed to login" };
  }
};
