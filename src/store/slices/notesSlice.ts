import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from 'utils';
import { INote, INotesState } from 'interfaces';

const initialState: INotesState = {
  data: getLocalStorage('notes') || [],
  currentData: getLocalStorage('currentNotes') || [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    // Добавить заметку в базу данных
    addNote: (state, action: PayloadAction<INote>) => {
      if (state.data) {
        state.data.push(action.payload);
      }
    },
    // Удалить заметку из базы данных
    removeNote: (state, action: PayloadAction<{ id: string }>) => {
      if (state.data) {
        state.data = state.data.filter(({ id }) => id !== action.payload.id);
      }
    },
    // Добавить/Обновить содержание заметки
    addValueToNote: (state, action: PayloadAction<{ id: string; value: string }>) => {
      if (state.data) {
        const note = state.data.find(({ id }) => id === action.payload.id);

        if (note) {
          note.value = action.payload.value;
        }
      }
    },
    // Добавить тег к заметке
    addTagToNote: (state, action: PayloadAction<{ id: string; tags: string[] }>) => {
      if (state.data) {
        const note = state.data.find(({ id }) => id === action.payload.id);

        if (note) {
          note.tags = action.payload.tags;
        }
      }
    },
    // Обновить массив для отфильтрованных заметок
    filterNotes: (state, action: PayloadAction<INote[]>) => {
      if (state.currentData) {
        state.currentData = action.payload;
      }
    },
  },
});

export const { addNote, removeNote, addValueToNote, addTagToNote, filterNotes } =
  notesSlice.actions;
export default notesSlice.reducer;
