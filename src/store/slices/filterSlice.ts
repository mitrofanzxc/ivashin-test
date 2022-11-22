import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IData {
  id: string;
  value: string;
}

interface IFilterState {
  isOpen: boolean;
  data: IData[];
}

const initialState: IFilterState = {
  isOpen: false,
  data: [],
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
    addTag: (state, action: PayloadAction<IData>) => {
      state.data.push(action.payload);
    },
  },
});

export const { closeFilterInput, toggleFilterInput, addTag } = filterSlice.actions;
export default filterSlice.reducer;
