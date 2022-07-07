import { createSlice } from "@reduxjs/toolkit";
import { ProductInCart } from "../../types/cart";

const initialState: ProductInCart[] = []

const cartSlice = createSlice({
  name: 'cart reducer',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {

  }
})

export const cartReducer = cartSlice.reducer