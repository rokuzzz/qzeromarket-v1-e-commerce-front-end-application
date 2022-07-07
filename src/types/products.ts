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

export interface ProductReducerState{
  productsList: Product[],
  currentList: Product[]
}

export interface ProductPost{
  title: string,
  price: number,
  description: string,
  categoryId: number,
  images: string[]
}