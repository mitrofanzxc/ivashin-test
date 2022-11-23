import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorageNotes } from 'utils';
import { INote, INotesState } from 'interfaces';

const initialState: INotesState = {
  data: getLocalStorageNotes() || [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
});

export const {} = notesSlice.actions;
export default notesSlice.reducer;
