import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CounterState {
  count: Record<number, number>;
}

const initialState: CounterState = {
  count: {},
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.count[productId] = (state.count[productId] || 0) + 1;
    },
    decrement: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      if (state.count[productId] > 0) {
        state.count[productId] -= 1;
      }
    },
  },
});
export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
