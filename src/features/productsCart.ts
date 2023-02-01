//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/lib/product";

interface ProductState {
  items: Product[] | [];
  isOpen: boolean;
  totalAmount: number;
  totalItems: number;
}

const initialState: ProductState = {
  items: [],
  isOpen: false,
  totalAmount: 0,
  totalItems: 0,
};

const productsCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddAndIncrementItemCart: (state, action: PayloadAction<Product>) => {
      if (state.items.find((item) => item.id === action.payload.id)) {
        state.items.map((item) => {
          if (item.quantity !== undefined)
            return item.id === action.payload.id ? item.quantity++ : item;
        });
      } else state.items = [...state.items, { ...action.payload, quantity: 1 }];
    },

    GetCartTotal: (state) => {
      let { totalAmount, totalItems } = state.items.reduce(
        (cartTotal: ProductState, cartItem: Product) => {
          if (cartItem.quantity !== undefined) {
            const { price, quantity } = cartItem;
            const itemTotal = price * quantity;

            cartTotal.totalAmount += itemTotal;
            cartTotal.totalItems += quantity;
            return cartTotal;
          }
        },
        { totalAmount: 0, totalItems: 0 }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalItems = totalItems;
    },

    RemoveItemCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    DecrementItem: (state, action: PayloadAction<Product>) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product?.quantity === 1) {
        state.items = state.items.filter((item) => {
          return item.id !== product?.id ? item : null;
        });
      } else {
        state.items.map((item) =>
          item.id === product?.id ? item.quantity!-- : item
        );
      }
    },

    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const {
  AddAndIncrementItemCart,
  RemoveItemCart,
  GetCartTotal,
  DecrementItem,
} = productsCart.actions;
export default productsCart.reducer;
