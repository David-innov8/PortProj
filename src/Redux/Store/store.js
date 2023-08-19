import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "../Reducers/fetchSlice";

const store = configureStore({
    reducer:{
        api:fetchSlice
    },
})

export default store