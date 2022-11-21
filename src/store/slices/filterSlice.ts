import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IFilterState {
  isOpen: boolean;
}

const initialState: IFilterState = {
  isOpen: false,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    closeFilterInput: (state) => {
      state.isOpen = false;
    },
    toggleFilterInput: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { closeFilterInput, toggleFilterInput } = filterSlice.actions;
export default filterSlice.reducer;
