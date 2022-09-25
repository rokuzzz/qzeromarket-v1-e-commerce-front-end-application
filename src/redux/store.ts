import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'

import { cartReducer } from "./reducers/cartReducer";
import { userReducer } from './reducers/userReducer';
import { productReducer } from './reducers/productReducer';
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: 'root', 
  storage
} 

const reducers = combineReducers({
  cartReducer,
  userReducer,
  productReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

const setupStore = configureStore({
  reducer: persistedReducer
})

export type RootState = ReturnType<typeof setupStore.getState>
export type AppDispatch = typeof setupStore.dispatch

export default setupStore