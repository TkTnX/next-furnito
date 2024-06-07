import { create } from "zustand";
import { ProductType } from "./components/Product";
import { ObjectId } from "mongoose";

interface cartState {
  items: ProductType[];
  totalPrice: number;
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: string) => void;
}

export const useCartStore = create<cartState>((set, get) => ({
  items: [],
  totalPrice: 0,
  addToCart: (product) => {
    const state = get();
    const findItem = state.items.find(
      (item: ProductType) => item._id === product._id
    );
    if (!findItem) set((state) => ({ items: [...state.items, product] }));
  },
  removeFromCart: (id) => {
    set((state) => ({ items: state.items.filter((item) => item._id !== id) }));
  },
}));
