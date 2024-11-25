import { AppDispatch } from "../store";
import { setProducts, setLoading, setError } from "./productSlice";
// import { Product } from "../../types/items";
import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get("https://dummyjson.com/products");
      dispatch(setProducts(response.data.products));
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };
};
