
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import userReducer from './userSlice';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
