import { configureStore } from "@reduxjs/toolkit";

import { productReducer } from "../../redux/reducers/productReducer";
import { userReducer } from "../../redux/reducers/userReducer";
import { cartReducer } from "../../redux/reducers/cartReducer";

const createTestStore =  () => {
  const store = configureStore({
    reducer: {
      productReducer,
      cartReducer,
      userReducer
    }
  })
  return store
}

export default createTestStore