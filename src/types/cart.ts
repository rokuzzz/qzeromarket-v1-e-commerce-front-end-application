import { Product } from "./products"

export interface ProductInCart extends Product{
  quantity: number
}

export interface Cart {
  cartItems: ProductInCart[],
  total: number
}