import { ProductInCart } from './../../types/cart';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../types/cart";
import { toast } from 'react-toastify'

const initialState: Cart = {
  // cartItems: (localStorage.getItem('cartItems')!),
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
        toast.info(`the quantity of «${action.payload.title}» has been increased`, {
          position: 'bottom-left',
          autoClose: 1500
        })
      } else {
        const tempProduct = { ...action.payload, quantity: 1}
        state.cartItems.push(tempProduct)
        toast.success('item added to cart', {
          position: 'bottom-left',
          autoClose: 1500
        })
      }
      state.total += 1

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
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