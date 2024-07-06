import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../reducer/cardSlice";
import token from "../reducer/token";

export const store = configureStore({
  reducer: {
    token: token,
    cardSlice: cardSlice,
  },
});

export type AppStore = typeof store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = AppStore["dispatch"];
