import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
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
    sizes: {
      type: Array,
    },
  },
  { timestamps: true }
);

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      min: 5,
      max: 20,
    },
    avatarUrl: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Product =
  mongoose.models?.product || mongoose.model("product", productSchema);
export const User = mongoose.models?.user || mongoose.model("user", userSchema);
