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
import { v4 as uuidv4 } from 'uuid';
import './style.scss';

const TagList: FC = () => {
  const { data: tagsData } = useAppSelector(({ tags }) => tags);
  const { data: notesData } = useAppSelector(({ notes }) => notes);
  const { data: filterTagArray } = useAppSelector(({ filter }) => filter);
  const dispatch = useAppDispatch();

  const handleFilter = (event: MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLInputElement;
    const { checked, value } = target;

    if (checked) {
      dispatch(removeTagFromFilterTagArray(value));
    } else if (!checked) {
      dispatch(addTagToFilterTagArray(value));
    }

    dispatch(filterNotes(filterData(filterTagArray, notesData)));
  };

  useSetLocalStorage('tags');
  useSetLocalStorage('filter');

  return (
    <ul className="tag-list" onClick={handleFilter} aria-hidden="true">
      {tagsData &&
        tagsData.map((value) => {
          return <Tag key={uuidv4()} value={value} />;
        })}
    </ul>
  );
};

export { TagList };
