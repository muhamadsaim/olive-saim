import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // value: 'Dashboard & Analytics'
    value: 0
};

const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers:{
        setValue: (state, action) => {
            state.value = action.payload;
        },
        resetState: () => initialState,
    }
})

export const { setValue,resetState } = navbarSlice.actions;
export default navbarSlice.reducer;