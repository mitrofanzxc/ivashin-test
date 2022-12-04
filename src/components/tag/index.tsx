import { FC, useEffect } from 'react';
import {
  useAppSelector,
  useAppDispatch,
  removeTagFromFilter,
  removeTagFromFilterTagArray,
  filterNotes,
  openModal,
} from 'store';
import { filterData } from 'utils';
import { ITag } from 'interfaces';
import Sprite from '../../assets/sprite.svg';
import './style.scss';

const Tag: FC<ITag> = ({ id, value }) => {
  const { data: notesData } = useAppSelector(({ notes }) => notes);
  const { data: filterTagArray } = useAppSelector(({ filter }) => filter);
  const dispatch = useAppDispatch();

  const handleRemoveTag = () => {
    dispatch(openModal());
    // dispatch(removeTagFromFilter(value));
    // dispatch(removeTagFromFilterTagArray(value));
    // const newData = filterData(filterTagArray, notesData);
    // dispatch(filterNotes(newData));
  };

  useEffect(() => {
    const newData = filterData(filterTagArray, notesData);
    dispatch(filterNotes(newData));
  }, [filterTagArray]);

  return (
    <label className="tag-list__item box-shadow pa-1" htmlFor={id}>
      {value}
      <input className="input-checkbox" type="checkbox" id={id} value={value} />
      <button className="button box-shadow" type="button" onClick={handleRemoveTag}>
        <svg className="button__icon">
          <use xlinkHref={`${Sprite}#delete`} />
        </svg>
      </button>
      <span className="input-checkbox_active" />
    </label>
  );
};

export { Tag };
