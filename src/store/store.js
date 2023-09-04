import { configureStore } from "@reduxjs/toolkit";
import catagaryReducer from '../features/catagary/catagarySlice'


export const store = configureStore({
    reducer: {
        catagary:catagaryReducer
    }
})
