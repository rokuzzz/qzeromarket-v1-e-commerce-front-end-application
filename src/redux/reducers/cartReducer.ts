import { ProductInCart } from './../../types/cart';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../types/cart";

const initialState: Cart = {
  products: [],
  total: 0
}

const cartSlice = createSlice({
  name: 'cart reducer',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInCart>) => {
      state.products.push(action.payload)
      state.total += 1
    },
    // increaseProduct: (state, action: PayloadAction<string>) => {
    //   state.products.map(
    //     product => {
    //       if()
    //     })
    // }
  }
})

export const cartReducer = cartSlice.reducer