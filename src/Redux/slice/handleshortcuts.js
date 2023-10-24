

import { createSlice } from '@reduxjs/toolkit';

const ShortcutSlice = createSlice({
  name: 'ShortcutSlice',
  initialState: {
    isOpenC: false,
    isOpenE: false,
    isOpenL: false,
    isOpenS: false,
    isOpenT: false,
    isOpenA: false,
  },
  reducers: {
    openCustomerForm: (state) => {
      state.isOpenC = true;
    },
    closeCustomerForm: (state) => {
      state.isOpenC = false;
    },
    openEmployeeForm: (state) => {
      state.isOpenE = true;
    },
    closeEmployeeForm: (state) => {
      state.isOpenE = false;
    },
    openLeaveForm: (state) => {
      state.isOpenL = true;
    },
    closeLeaveForm: (state) => {
      state.isOpenL = false;
    },
    openStockForm: (state) => {
      state.isOpenS = true;
    },
    closeStockForm: (state) => {
      state.isOpenS = false;
    },
    openLabForm: (state) => {
      state.isOpenT = true;
    },
    closeLabForm: (state) => {
      state.isOpenT = false;
    },
    openAccountForm: (state) => {
      state.isOpenA = true;
    },
    closeAccountForm: (state) => {
      state.isOpenA = false;
    },
  },
});

export const { openCustomerForm, closeCustomerForm,openEmployeeForm, closeEmployeeForm,openLeaveForm, closeLeaveForm,openStockForm, closeStockForm,openLabForm, closeLabForm,openAccountForm, closeAccountForm } = ShortcutSlice.actions;
export default ShortcutSlice.reducer;
