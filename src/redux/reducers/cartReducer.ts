import { ProductInCart } from './../../types/cart';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../types/cart";
import { Product } from '../../types/products';

const initialState: Cart = {
  cartItems: [],
  total: 0
}

const cartSlice = createSlice({
  name: 'cart reducer',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInCart>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if(itemIndex >= 0){
        state.cartItems[itemIndex].quantity += 1
      } else {
        const tempProduct = { ...action.payload, quantity: 1}
        state.cartItems.push(tempProduct)
      }
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
export const {
  addToCart
} = cartSlice.actions