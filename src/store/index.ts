import { store } from './store';
import { useAppSelector, useAppDispatch } from './hooks';
import {
  closeTagInput,
  toggleTagInput,
  addTagToFilter,
  addTagToFilterFromNote,
  removeTagFromFilter,
} from './slices/tagsSlice';
import {
  addNote,
  removeNote,
  addValueToNote,
  addTagToNote,
  filterNotes,
} from './slices/notesSlice';
import { addTagToFilterTagArray, removeTagFromFilterTagArray } from './slices/filterSlice';
import { openModal, closeModal, addDataToModal } from './slices/modalSlice';

export {
  store,
  useAppSelector,
  useAppDispatch,
  closeTagInput,
  toggleTagInput,
  addTagToFilter,
  addTagToFilterFromNote,
  removeTagFromFilter,
  addNote,
  removeNote,
  addValueToNote,
  addTagToNote,
  filterNotes,
  addTagToFilterTagArray,
  removeTagFromFilterTagArray,
  openModal,
  closeModal,
  addDataToModal,
};
