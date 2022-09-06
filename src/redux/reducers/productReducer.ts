import { ProductReducerState, ProductPost } from './../../types/products';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../types/products";

const initialState: ProductReducerState = {
  productsList: [],
  currentList: [],
  currentPageProducts: []
}

export interface PaginationType{
  from: number,
  to: number
}

// export interface PaginationSetting{
//   offset: number,
//   limit: number
// }

export const fetchAllProducts = createAsyncThunk(
  'fetchAllProducts',
   async() => {
    try{
      const response = await axios.get('https://api.escuelajs.co/api/v1/products')
      return response.data
    } catch(e) {
      console.log('fetchAllProducts error: ' + e)
    }
  }
)

// export const fetchCurrentPage = createAsyncThunk(
//   'fetchCurrentPage',
//   async({offset, limit}: PaginationSetting) => {
//     try{
//       const response = await axios.get(
//         `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
//       )
//       return response.data
//     } catch(e) {
//       console.log('fetchCurrentProduct error: ' + e)
//     }
//   }
// )

export const addProductToApi = createAsyncThunk(
  'addProductToApi', 
  async(product: ProductPost) => {
    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/products/', {product})
      console.log(response.data)
      return response.data
    } catch(e) {
      console.log('cannot post')
    }
  }
)

const productSlice = createSlice({
  name: 'product reducer',
  initialState: initialState,
  reducers: {
    currentPage: (state, action: PayloadAction<PaginationType>) => {
      state.currentPageProducts = state.currentList.slice(action.payload.from, action.payload.to)
    },
    sortByCategory: (state, action:PayloadAction<string>) => {
      //return state.filter(product => product.category.name === action.payload)
      state.currentList = state.productsList.filter(product => product.category.name === action.payload)
    },
    sortByPriceAsc: (state) => {
      state.currentList = state.currentList.sort((a, b) => a.price - b.price)
    },
    sortByPriceDesc: (state) => {
      state.currentList = state.currentList.sort((a, b) => b.price - a.price) 
    },
    addProduct: (state, action:PayloadAction<Product>) => {
      state.productsList.push(action.payload)
      state.currentList.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.productsList = action.payload
      state.currentList = action.payload
    })
    // .addCase(fetchCurrentPage.fulfilled, (state, action) => {
    //   state.currentList = action.payload
    // })
    .addCase(addProductToApi.fulfilled, (state, action) => {
      state.productsList.push(action.payload)
      state.currentList.push(action.payload)
    })
  }
})

export const productReducer = productSlice.reducer
export const {
  sortByCategory,
  sortByPriceAsc,
  sortByPriceDesc,
  currentPage,
  addProduct
} = productSlice.actions