import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity;
      } else {
        state.cart.push({ ...action.payload });
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity++;
    },

    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity--;
    },

    deleteItem: (state, action) => {
      const removedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removedCart;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem } =
  cartSlice.actions;
