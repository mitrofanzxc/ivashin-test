import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from './slices/tagsSlice';
import notesReducer from './slices/notesSlice';

export const store = configureStore({
  reducer: {
    tags: tagsReducer,
    notes: notesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
