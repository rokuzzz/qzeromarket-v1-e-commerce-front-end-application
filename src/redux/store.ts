import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./reducers/cartReducer";
import { userReducer } from './reducers/userReducer';
import { productReducer } from './reducers/productReducer';


const setupStore = configureStore({
  reducer: {
    cartReducer,
    userReducer,
    productReducer
  }
})


export type RootState = ReturnType<typeof setupStore.getState>
export type AppDispatch = typeof setupStore.dispatch

export default setupStore