import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from 'utils';
import { ITagsState } from 'interfaces';

const initialState: ITagsState = {
  isInputOpen: false,
  data: getLocalStorage('tags') || [],
  filterTagArray: getLocalStorage('filterTagArray') || [],
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
        state.data = [...new Set([...state.data, ...action.payload])];
      }
    },
    removeTagFromFilter: (state, action: PayloadAction<string>) => {
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
} = tagsSlice.actions;
export default tagsSlice.reducer;
