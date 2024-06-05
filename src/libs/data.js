import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDB";
import { Product } from "./models";
export const getProducts = async () => {
  try {
    connectToDb();
    const products = await Product.find();

    revalidatePath("/");
    return products;
  } catch (error) {
    console.log(error);
  }
};
