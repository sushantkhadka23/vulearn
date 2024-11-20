
import { configureStore } from "@reduxjs/toolkit";
//slices
import  themeReducer  from "./theme/themeSlice";
import authReducer from "./auth/authSlice";
import levelReducer from "./level/levelSlice";

export const store = configureStore({
    reducer:{
        theme:themeReducer,
        auth:authReducer,
        level:levelReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;