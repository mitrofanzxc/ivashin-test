import { store } from './store';
import { useAppSelector, useAppDispatch } from './hooks';
import {
  closeTagInput,
  toggleTagInput,
  addTagToFilter,
  addTagToFilterFromNote,
  removeTagFromFilter,
  filterByTag,
} from './slices/tagsSlice';
import { addNote, addValueToNote, addTagToNote } from './slices/notesSlice';

export {
  store,
  useAppSelector,
  useAppDispatch,
  closeTagInput,
  toggleTagInput,
  addTagToFilter,
  addTagToFilterFromNote,
  removeTagFromFilter,
  filterByTag,
  addNote,
  addValueToNote,
  addTagToNote,
};
