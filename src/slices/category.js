import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryAPI from "../services/categoryAPI";

const initialState = {
  categoryList: [],
  isLoading: false,
  error: null,
};

export const getAllCategory = createAsyncThunk(
  "product/getAllCategory",
  async () => {
    try {
      const data = await categoryAPI.getAllCategory();
      return data.data;
    } catch (error) {
      throw error;
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.isLoading = true;
        state.categoryList = action.payload;
      })
      .addCase(getAllCategory.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      });
  },
});

export default categorySlice.reducer;
