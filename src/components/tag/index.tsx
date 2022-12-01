import { FC } from 'react';
import { useAppDispatch, removeTagFromFilter } from 'store';
import { ITag } from 'interfaces';
import Sprite from '../../assets/sprite.svg';
import './style.scss';

const Tag: FC<ITag> = ({ id, value }) => {
  const dispatch = useAppDispatch();

  const handleRemoveTag = () => {
    dispatch(removeTagFromFilter(value));
  };

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
