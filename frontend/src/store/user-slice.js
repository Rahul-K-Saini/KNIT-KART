import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    user: {
        name: "Dohn Joe",
        gender: "M",
        email: "btc@knit.ac.in",
        contact: "9977141714",
        hostel: "ABC",
        roomNo: "45"
    }
}

export default createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser(state, action) {
            return state.user = action.payload;
        }
    },
})