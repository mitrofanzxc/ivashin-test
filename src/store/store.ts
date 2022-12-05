import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from './slices/tagsSlice';
import notesReducer from './slices/notesSlice';
import filterReducer from './slices/filterSlice';
import modalReducer from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    tags: tagsReducer,
    notes: notesReducer,
    filter: filterReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
