import { FC, MouseEvent } from 'react';
import {
  useAppDispatch,
  useAppSelector,
  addTagToFilterTagArray,
  removeTagFromFilterTagArray,
  filterNotes,
} from 'store';
import { useSetLocalStorage } from 'hooks';
import { filterData } from 'utils';
import { Tag } from 'components';
import './style.scss';

const TagList: FC = () => {
  const { data: tagsData } = useAppSelector(({ tags }) => tags);
  const { data: notesData } = useAppSelector(({ notes }) => notes);
  const { data: filterTagArray } = useAppSelector(({ filter }) => filter);
  const dispatch = useAppDispatch();

  const handleFilter = (event: MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLInputElement;
    const { checked, value } = target;

    if (target.type === 'checkbox') {
      if (checked) {
        dispatch(addTagToFilterTagArray(value));
        const newData = filterData(filterTagArray, notesData);
        dispatch(filterNotes(newData));
      } else {
        dispatch(removeTagFromFilterTagArray(value));
        const newData = filterData(filterTagArray, notesData);
        dispatch(filterNotes(newData));
      }
    }
  };

  useSetLocalStorage('tags');

  return (
    <ul className="tag-list" onClick={handleFilter} aria-hidden="true">
      {tagsData &&
        tagsData.map((value, index) => {
          return (
            <Tag
              key={`filter-tag-${value}-${index}`}
              id={`filter-tag-${value}-${index}`}
              value={value}
            />
          );
        })}
    </ul>
  );
};

export { TagList };
