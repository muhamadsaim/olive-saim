
import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    activeButtonIndex: 0,
    activeButtonIndexFinance: 0,
  },
  reducers: {
    setActiveButton: (state, action) => {
      state.activeButtonIndex = action.payload;
    },
    setActiveButtonFinance: (state, action) => {
      state.activeButtonIndexFinance = action.payload;
    },
  },
});

export const { setActiveButton,setActiveButtonFinance } = toggleSlice.actions;
export default toggleSlice.reducer;
