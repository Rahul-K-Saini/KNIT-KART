import { createSlice } from "@reduxjs/toolkit";

const initialUserState = { user: null }

export default createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser(state, action) {
            console.log("user received : "+action.payload);
            return state.user = action.payload;
        }
    },
})