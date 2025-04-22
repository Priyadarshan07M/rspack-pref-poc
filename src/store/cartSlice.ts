
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  value: number;
  loading: boolean;
  error: string | null;
  data: any[];
}

const initialState: CartState = {
  value: 0,
  loading: false,
  error: null,
  data: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, setLoading, setError, setData } = cartSlice.actions;
export default cartSlice.reducer;
