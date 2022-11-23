import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorageTags } from 'utils';
import { ITag, IFilterState } from './filterSlice.interface';

const initialState: IFilterState = {
  isOpen: false,
  tags: getLocalStorageTags('tags') || [],
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
    addTag: (state, action: PayloadAction<ITag>) => {
      state.tags.push(action.payload);
    },
    filterByTag: (state, action: PayloadAction<string>) => {
      state.tags = state.tags.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { closeFilterInput, toggleFilterInput, addTag, filterByTag } = filterSlice.actions;
export default filterSlice.reducer;
