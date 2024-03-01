import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme-slice";

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer
    }
});

export const themeActions = themeSlice.actions;
export default store;