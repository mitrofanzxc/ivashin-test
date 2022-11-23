import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorageTags } from 'utils';
import { ITag, IFilterState } from 'interfaces';

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
      if (state.tags) {
        state.tags.push(action.payload);
      }
    },
    removeTag: (state, action: PayloadAction<string>) => {
      if (state.tags) {
        state.tags = state.tags.filter(({ id }) => id !== action.payload);
      }
    },
    filterByTag: (state, action: PayloadAction<string>) => {
      if (state.tags) {
        state.tags = state.tags.filter(({ id }) => id !== action.payload);
      }
    },
  },
});

export const { closeFilterInput, toggleFilterInput, addTag, removeTag, filterByTag } =
  filterSlice.actions;
export default filterSlice.reducer;
