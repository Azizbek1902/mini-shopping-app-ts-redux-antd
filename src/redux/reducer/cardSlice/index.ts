import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, Product } from "../../../interfaces";

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const isAdded = state.items.find((elem) => elem.id === action.payload.id);
      if (isAdded) {
        const updateData = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: Number((item.totalPrice + item.price).toFixed(2)),
            };
          }
          return item;
        });
        state.items = updateData;
      } else {
        const data = [
          ...state.items,
          { ...action.payload, quantity: 1, totalPrice: action.payload.price },
        ];
        state.items = data;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clear: (state) => {
      state.items = [];
    },
    minusQuantity: (state, action: PayloadAction<Product>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          state.items = state.items.map((itm) =>
            itm.id === action.payload.id
              ? {
                  ...itm,
                  quantity: itm.quantity - 1,
                  totalPrice: Number((itm.totalPrice - itm.price).toFixed(2)),
                }
              : itm
          );
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
    plusQuantity: (state, action: PayloadAction<Product>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        state.items = state.items.map((elem) =>
          elem.id === action.payload.id
            ? {
                ...elem,
                quantity: elem.quantity + 1,
                totalPrice: Number((item.totalPrice + item.price).toFixed(2)),
              }
            : elem
        );
      }
    },
  },
});

export const { addItem, removeItem, minusQuantity, plusQuantity, clear } =
  cartSlice.actions;
export default cartSlice.reducer;
