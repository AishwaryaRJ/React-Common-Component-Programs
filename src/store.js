import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./components/counterComponent/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})