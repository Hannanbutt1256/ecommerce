import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import { cartReducer } from "./cart/cartSlice";
import productReducer from "./product/productSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    products: productReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
