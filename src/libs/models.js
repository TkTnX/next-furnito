import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
  },
  desc: {
    type: String,
    required: true,
    min: 5,
  },
  slug: {
    type: String,
    required: true,
  },
});

export const Product =
  mongoose.models?.product || mongoose.model("product", productSchema);
