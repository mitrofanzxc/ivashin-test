import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from 'utils';
import { ITagsState } from 'interfaces';

const initialState: ITagsState = {
  isInputOpen: false,
  data: getLocalStorage('tags') || [],
};

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    closeTagInput: (state) => {
      state.isInputOpen = false;
    },
    toggleTagInput: (state) => {
      state.isInputOpen = !state.isInputOpen;
    },
    addTagToFilter: (state, action: PayloadAction<string>) => {
      if (state.data) {
        const note = state.data.includes(action.payload);

        if (!note) {
          state.data.push(action.payload);
        }
      }
    },
    addTagToFilterFromNote: (state, action: PayloadAction<string[]>) => {
      if (state.data) {
        state.data = Array.from(new Set([...state.data, ...action.payload]));
      }
    },
    removeTagFromFilter: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data = state.data.filter((value) => value !== action.payload);
      }
    },
    filterByTag: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data = state.data.filter((value) => value !== action.payload);
      }
    },
  },
});

export const {
  closeTagInput,
  toggleTagInput,
  addTagToFilter,
  addTagToFilterFromNote,
  removeTagFromFilter,
  filterByTag,
} = tagsSlice.actions;
export default tagsSlice.reducer;
