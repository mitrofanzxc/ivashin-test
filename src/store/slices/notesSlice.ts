import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from 'utils';
import { INote, INotesState } from 'interfaces';

const initialState: INotesState = {
  data: getLocalStorage('notes') || [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<INote>) => {
      if (state.data) {
        state.data.push(action.payload);
      }
    },
    addValueToNote: (state, action: PayloadAction<{ id: string; value: string }>) => {
      if (state.data) {
        const note = state.data.find(({ id }) => id === action.payload.id);

        if (note) {
          note.value = action.payload.value;
        }
      }
    },
    addTagToNote: (state, action: PayloadAction<{ id: string; tags: string[] }>) => {
      if (state.data) {
        const note = state.data.find(({ id }) => id === action.payload.id);

        if (note) {
          note.tags = action.payload.tags;
        }
      }
    },
  },
});

export const { addNote, addValueToNote, addTagToNote } = notesSlice.actions;
export default notesSlice.reducer;
