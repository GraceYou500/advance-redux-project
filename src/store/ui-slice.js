import { createSlice } from '@reduxjs/toolkit';

const initialUIState = { showCart: false };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    toggleCart(state) {
      // receive old state as parameter
      state.showCart = !state.showCart;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
