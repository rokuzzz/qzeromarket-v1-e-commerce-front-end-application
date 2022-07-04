import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./reducers/cartReducer";

const setupStore = configureStore({
  reducer: {
    cartReducer
  }
})


export type RootState = ReturnType<typeof setupStore.getState>
export type AppDispatch = typeof setupStore.dispatch

export default setupStore