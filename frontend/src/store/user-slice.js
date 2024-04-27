import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    user: null
}

export default createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
    },
})