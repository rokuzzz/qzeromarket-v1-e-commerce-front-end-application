import { configureStore } from "@reduxjs/toolkit";

import { productReducer } from "../../../redux/reducers/productReducer";
import { userReducer } from "../../../redux/reducers/userReducer";
import { cartReducer } from "../../../redux/reducers/cartReducer";

const createTestStore =  () => {
  const setupStore = configureStore({
    reducer: {
      productReducer,
      cartReducer,
      userReducer
    }
  })
  return setupStore
}

export default createTestStore