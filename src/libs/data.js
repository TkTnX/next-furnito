import { connectToDb } from "./connectToDB";
import { Product, User } from "./models";
export const getProducts = async () => {
  try {
    connectToDb();
    const products = await Product.find();

    return products;
  } catch (error) {
    console.log(error);
    return { error: "Не удалось получить продукты" };
  }
};

export const getProduct = async (slug) => {
  try {
    connectToDb();
    const product = await Product.findOne({ slug: slug });

    return product;
  } catch (error) {
    console.log(error);
    return { error: "Не удалось получить продукт" };
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();

    return users;
  } catch (error) {
    console.log(error);
    return { error: "Не удалось получить пользователей" };
  }
};

