import { FC, MouseEvent } from 'react';
import { useAppDispatch, useAppSelector, filterByTag } from 'store';
import { Tag } from 'components';
import { useSetLocalStorageTags } from 'utils';
import './style.scss';

const TagList: FC = () => {
  const { data } = useAppSelector(({ tags }) => tags);
  const dispatch = useAppDispatch();

  const handleFilter = (event: MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLLIElement;
    const value = target.textContent as string;
    dispatch(filterByTag(value));
  };

  useSetLocalStorageTags();

  return (
    <ul className="tag-list" onClick={handleFilter} aria-hidden="true">
      {data &&
        data.map(({ id, value }) => {
          return <Tag key={id} id={id} value={value} />;
        })}
    </ul>
  );
};

export { TagList };
