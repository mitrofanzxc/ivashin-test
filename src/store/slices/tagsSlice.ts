import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorageTags } from 'utils';
import { ITag, ITagsState } from 'interfaces';

const initialState: ITagsState = {
  isInputOpen: false,
  data: getLocalStorageTags() || [],
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
    addTagToFilter: (state, action: PayloadAction<ITag>) => {
      if (state.data) {
        state.data.push(action.payload);
      }
    },
    removeTagFromFilter: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data = state.data.filter(({ id }) => id !== action.payload);
      }
    },
    filterByTag: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data = state.data.filter(({ id }) => id !== action.payload);
      }
    },
  },
});

export const { closeTagInput, toggleTagInput, addTagToFilter, removeTagFromFilter, filterByTag } =
  tagsSlice.actions;
export default tagsSlice.reducer;
