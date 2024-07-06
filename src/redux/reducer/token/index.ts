import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { Token } from "../../../interfaces/index";

const tokenLocal = localStorage.getItem("token");

const initialState: Token = {
  token: tokenLocal ? tokenLocal : "",
};

const token = createSlice({
  name: "login",
  initialState,
  reducers: {
    addToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    deleteToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const { addToken, deleteToken } = token.actions;
export default token.reducer;

export const selectCarts = (state: RootState) => state.token.token;
