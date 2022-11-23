import { store } from './store';
import { useAppSelector, useAppDispatch } from './hooks';
import { closeFilterInput, toggleFilterInput, addTag, filterByTag } from './slices/filterSlice';

export {
  store,
  useAppSelector,
  useAppDispatch,
  closeFilterInput,
  toggleFilterInput,
  addTag,
  filterByTag,
};
