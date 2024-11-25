import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/items";

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}
const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setProducts, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;
