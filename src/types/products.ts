export interface Category {
  id: number,
  name: string,
  image: string
}
export interface  Product{
  id: number,
  title: string,
  description: string,
  price: number,
  category: Category,
  images: string[],
}

export interface ProductInCart extends Product{
  quantity: number
}