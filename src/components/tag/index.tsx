import { FC } from 'react';
import { useAppDispatch, removeTag } from 'store';
import { ITag } from 'interfaces';
import Sprite from '../../assets/sprite.svg';
import './style.scss';

const Tag: FC<ITag> = ({ id, value }) => {
  const dispatch = useAppDispatch();

  const handleRemoveTag = () => {
    dispatch(removeTag(id));
  };

  return (
    <li className="tag-list__item box-shadow pa-1">
      {value}
      <button className="button box-shadow" type="button" onClick={handleRemoveTag}>
        <svg className="button__icon">
          <use xlinkHref={`${Sprite}#delete`} />
        </svg>
      </button>
    </li>
  );
};

export { Tag };
