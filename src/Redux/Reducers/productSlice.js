import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductById } from "../../Components/Auth/Api";

export const fetchProduct = createAsyncThunk('products/fetchProduct', async(id)=>{
    const response= await fetchProductById(id)
    return response
})

const productSlice = createSlice({
    name: ' product ',
    initialState: {},
    reducer: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.fulfilled, (state, action)=>{
            return action.payload
        })
    }
})

export default productSlice.reducer