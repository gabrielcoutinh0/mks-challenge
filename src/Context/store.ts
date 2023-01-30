import { configureStore } from "@reduxjs/toolkit";
import productsCart, { productsFetch } from "@/features/productsCart";

export const store = configureStore({
  reducer: {
    cart: productsCart,
  },
});

store.dispatch(productsFetch());
