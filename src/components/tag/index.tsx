import { FC } from 'react';
import { ITag } from 'interfaces';
import './style.scss';

const Tag: FC<ITag> = ({ id, value }) => {
  return (
    <li id={id} className="tag-list__item box-shadow pa-1">
      {value}
    </li>
  );
};

export { Tag };
