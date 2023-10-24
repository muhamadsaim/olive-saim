// selectedRowSlice.js
import { createSlice } from '@reduxjs/toolkit';

const selectedStockSlice = createSlice({
  name: 'selectedStock',
  initialState: { data: null, isEditStockOpen: false,isEditOpenOilStock:false },
  reducers: {
    setSelectedStockData: (state, action) => {
      state.data = action.payload;
    },
    openEditStock: (state) => {
      state.isEditStockOpen = true;
    },
    closeEditStock: (state) => {
      state.isEditStockOpen = false;
    },
    openEditOilStock: (state) => {
      state.isEditOpenOilStock = true;
    },
    closeEditOilStock: (state) => {
      state.isEditOpenOilStock = false;
    },
  },
});

export const {
  setSelectedStockData,
  openEditStock,
  closeEditStock,
  openEditOilStock,
  closeEditOilStock
} = selectedStockSlice.actions;

export default selectedStockSlice.reducer;
