import { configureStore } from "@reduxjs/toolkit";
//slices
import levelReducer from "./level/levelSlice";

export const store = configureStore({
    reducer:{
        level:levelReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;