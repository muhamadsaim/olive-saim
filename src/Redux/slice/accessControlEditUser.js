// selectedRowSlice.js
import { createSlice } from '@reduxjs/toolkit';

const selectedRowSlice = createSlice({
  name: 'selectedRow',
  initialState: { data: null, isEditUserOpen: false },
  reducers: {
    setSelectedRowData: (state, action) => {
      state.data = action.payload;
    },
    openEditUser: (state) => {
      state.isEditUserOpen = true;
    },
    closeEditUser: (state) => {
      state.isEditUserOpen = false;
    },
  },
});

export const {
  setSelectedRowData,
  openEditUser,
  closeEditUser,
} = selectedRowSlice.actions;

export default selectedRowSlice.reducer;
