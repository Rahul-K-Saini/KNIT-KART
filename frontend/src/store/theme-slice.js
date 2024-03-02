import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = { theme: "light" }

export default createSlice({
    name: 'theme',
    initialState: initialThemeState,
    reducers: {
        toggle(state) {
            let html = document.querySelector('html');
            if (state.theme === "light") {
                state.theme = "dark";
                html.classList.remove("light")
            } else if (state.theme === "dark") {
                html.classList.remove("dark")
                state.theme = "light";
            }
            localStorage.setItem("knit-kart-theme", state.theme);
            html.classList.add(state.theme)
        },
        initialVisit(state) {
            const initialTheme = localStorage.getItem("knit-kart-theme") || "light";
            let html = document.querySelector('html');
            html.classList.add(initialTheme)
            state.theme = initialTheme;
        }
    },
})