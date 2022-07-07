import { ProductReducerState, ProductPost } from './../../types/products';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../types/products";

const initialState: ProductReducerState = {
  productsList: [],
  currentList: []
}

export const fetchAllProducts = createAsyncThunk(
  'fetchAllProducts',
   async() => {
    try{
      const response = await axios.get('https://api.escuelajs.co/api/v1/products')
      return response.data
    } catch(e) {
      console.log(e)
    }
  }
)

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
    sortByCategory: (state, action:PayloadAction<string>) => {
      //return state.filter(product => product.category.name === action.payload)
      state.currentList = state.productsList.filter(product => product.category.name === action.payload)
    },
    sortByPriceAsc: (state) => {
      state.currentList = state.productsList.sort((a, b) => a.price - b.price) 
    },
    sortByPriceDesc: (state) => {
      state.currentList = state.productsList.sort((a, b) => b.price - a.price) 
    },
    addProduct: (state, action:PayloadAction<Product>) => {
      state.productsList.push(action.payload)
      state.currentList.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.productsList = action.payload
      state.currentList = action.payload
    })
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
  addProduct
} = productSlice.actions