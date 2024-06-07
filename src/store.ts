import { create } from "zustand";
import { ProductType } from "./components/Product";

interface cartState {
  items: ProductType[];
  totalPrice: number;
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: string) => void;
}

const handleMathPrice = (set: any) => {
  set((state: cartState) => ({
    totalPrice: state.items.reduce(
      (acc, item) =>
        acc +
        +`${item.discount ? item.price * +`0.${item.discount}` : item.price}`,
      0
    ),
  }));
};

export const useCartStore = create<cartState>((set, get) => ({
  items: [],
  totalPrice: 0,
  addToCart: (product) => {
    const state = get();
    const findItem = state.items.find(
      (item: ProductType) => item._id === product._id
    );
    if (!findItem) {
      set((state) => ({ items: [...state.items, product] }));
      handleMathPrice(set);
    }
  },
  removeFromCart: (id) => {
    set((state) => ({ items: state.items.filter((item) => item._id !== id) }));
    handleMathPrice(set);
  },
}));
