import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDB";
import { Product } from "./models";
export const getProducts = async () => {
  try {
    connectToDb();
    const products = await Product.find();

    return products;
  } catch (error) {
    console.log(error);
  }
};



export const getProduct = async (slug) => {
  try {
    connectToDb();
    const product = await Product.findOne({ slug: slug });

    return product;
  } catch (error) {
    console.log(error);
  }
};
