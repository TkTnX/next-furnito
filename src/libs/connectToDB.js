import mongoose from "mongoose";

const connectedToBd = {};

export const connectToDb = async () => {
  try {
    if (connectToDb.isConnected) {
      console.log("База данных подключена!");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO);
    console.log((connectedToBd.isConnected = db.connections[0].readyState));
    console.log("База данных успешно подключена");
  } catch (error) {
    console.log("Не удалось подключиться к базе данных!");
    console.log(error);
    return { error: "Не удалось подключиться к базе данных!" };
  }
};
