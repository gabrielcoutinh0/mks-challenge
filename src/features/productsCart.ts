import { useFetch } from "@/hooks/useFetch";
import { Product, url } from "@/lib/product";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const productsFetch = createAsyncThunk("products/productsFetch", () =>
  useFetch(url)
);

interface ProductState {
  items: Product[] | [];
  isOpen: boolean;
  totalAmount: number;
  totalCount: number;
}

const initialState: ProductState = {
  items: [],
  isOpen: false,
  totalAmount: 0,
  totalCount: 0,
};

const productsCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddCart: (state, action: PayloadAction<any>) => {
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push({ ...action.payload, amount: 1 });
      } else {
        state.items.map((item) => {
          if (item.amount !== undefined)
            return item.id === action.payload.id ? item.amount++ : item;
        });
      }
    },
    GetCartTotal: (state) => {
      interface GetCartTotalProps {
        totalAmount: number;
        totalCount: number;
        price: number;
        amount: number;
      }

      let { totalAmount, totalCount } = state.items.reduce(
        (cartTotal: GetCartTotalProps, cartItem: GetCartTotalProps) => {
          console.log(cartTotal);
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        { totalAmount: 0, totalCount: 0 }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
    RemoveCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    DecreaseProduct: (state, action: PayloadAction<Product>) => {
      const product = state.items.find((prod) => prod.id === action.payload.id);
      if (product?.amount === 1) {
        state.items = state.items.filter((prod) => {
          return prod.id !== product?.id ? prod : null;
        });
      } else {
        state.items.map((prod) =>
          prod.id === product?.id ? prod.amount!-- : prod
        );
      }
    },

    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { AddCart, RemoveCart, GetCartTotal, DecreaseProduct } =
  productsCart.actions;
export default productsCart.reducer;
