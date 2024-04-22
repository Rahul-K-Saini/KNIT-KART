import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    user: null
}

export default createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser: (state, action) => void(state.user = action.payload),
        // setUser(state, action) {
        //     return state.user = action.payload;
        // },
    },
})