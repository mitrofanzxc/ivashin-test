import { FC, MouseEvent } from 'react';
import { useAppDispatch, useAppSelector, filterByTag } from 'store';
import { useSetLocalStorage } from 'hooks';
import { Tag } from 'components';
import { v4 as uuidv4 } from 'uuid';
import './style.scss';

const TagList: FC = () => {
  const { data } = useAppSelector(({ tags }) => tags);
  const dispatch = useAppDispatch();

  const handleFilter = (event: MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLLIElement;
    const value = target.textContent as string;
    dispatch(filterByTag(value));
  };

  useSetLocalStorage('tags');

  return (
    <ul className="tag-list" onClick={handleFilter} aria-hidden="true">
      {data &&
        data.map((value) => {
          return <Tag key={uuidv4()} value={value} />;
        })}
    </ul>
  );
};

export { TagList };
