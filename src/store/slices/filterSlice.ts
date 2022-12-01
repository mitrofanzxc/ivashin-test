import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from 'utils';
import { IFilterState } from 'interfaces';

const initialState: IFilterState = {
  data: getLocalStorage('filter') || [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addTagToFilterTagArray: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data.push(action.payload);
      }
    },
    removeTagFromFilterTagArray: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data = state.data.filter((value) => value !== action.payload);
      }
    },
  },
});

export const { addTagToFilterTagArray, removeTagFromFilterTagArray } = filterSlice.actions;
export default filterSlice.reducer;
