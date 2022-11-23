import { store } from './store';
import { useAppSelector, useAppDispatch } from './hooks';
import { closeTagInput, toggleTagInput, addTag, removeTag, filterByTag } from './slices/tagsSlice';

export {
  store,
  useAppSelector,
  useAppDispatch,
  closeTagInput,
  toggleTagInput,
  addTag,
  removeTag,
  filterByTag,
};
