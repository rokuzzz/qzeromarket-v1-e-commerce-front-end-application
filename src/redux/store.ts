import { userReducer } from './reducers/userReducer';
import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./reducers/cartReducer";

const setupStore = configureStore({
  reducer: {
    cartReducer,
    userReducer
  }
})


export type RootState = ReturnType<typeof setupStore.getState>
export type AppDispatch = typeof setupStore.dispatch

export default setupStore