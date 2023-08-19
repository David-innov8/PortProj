import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: "",
  count: 0,
};



export const fetchProduct = createAsyncThunk("api/fetchProduct", async () => {
  const response = await fetch(
    "https://api.escuelajs.co/api/v1/products"
  );
  const data = await response.json();

  return data;
});

const fetchSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    incremaentCounter: (state) => {
      state.count += 1;
    },
    decrementCounter: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export const selectData = (state) => state.api.data;

export default fetchSlice.reducer;
