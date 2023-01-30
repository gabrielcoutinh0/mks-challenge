import { configureStore } from "@reduxjs/toolkit";
import productsCart from "@/features/productsCart";

export const store = configureStore({
  reducer: {
    cart: productsCart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
