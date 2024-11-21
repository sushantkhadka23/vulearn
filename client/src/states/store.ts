
import { configureStore } from "@reduxjs/toolkit";
//slices
import authReducer from "./auth/authSlice";
import levelReducer from "./level/levelSlice";

export const store = configureStore({
    reducer:{
        auth:authReducer,
        level:levelReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;