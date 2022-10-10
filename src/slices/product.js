import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productAPI from "../services/productAPI";

const initialState = {
  productList: [],
  productDetail: {},
  isLoading: false,
  error: null,
};

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async (keyword) => {
    try {
      const data = await productAPI.getAllProduct();

      if (keyword) {
        let result = data.data.filter((item) => {
          return (
            item.title.toLowerCase().includes(keyword.toLowerCase()) ||
            item.category.toLowerCase().includes(keyword.toLowerCase())
          );
        });

        return result;
      } else {
        return data.data;
      }
    } catch (error) {
      throw error;
    }
  }
);

export const getDetailProduct = createAsyncThunk(
  "product/getDetailProduct",
  async (id) => {
    try {
      const data = await productAPI.getDetailProduct(id);
      return data.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getProductByCategory = createAsyncThunk(
  "product/getProductByCategory",
  async (categoryName) => {
    try {
      const data = await productAPI.getProductByCategory(categoryName);
      return data.data;
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
 
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(getAllProduct.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      })

      .addCase(getDetailProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetail = action.payload;
      })
      .addCase(getDetailProduct.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      })

      .addCase(getProductByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(getProductByCategory.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      });
  },
});

export default productSlice.reducer;
