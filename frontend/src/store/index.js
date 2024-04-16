import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme-slice";
import userSlice from "./user-slice";

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        user: userSlice.reducer,
    }
});

export const themeActions = themeSlice.actions;
export const userActions = userSlice.actions;
export default store;