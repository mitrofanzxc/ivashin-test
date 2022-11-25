import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'store';
import { convertDate } from 'utils';
import './style.scss';

const NotesList: FC = () => {
  const { data } = useAppSelector(({ notes }) => notes);

  return (
    <ul className="notes-list">
      {data &&
        data.map(({ id, time, value }) => {
          return (
            <Link key={id} className="notes-list__item box-shadow pa-2" to={`/${id}`}>
              <h3 className="h3">{value.length > 30 ? `${value.slice(0, 30)}...` : value}</h3>
              <h4 className="h4">{convertDate(time)}</h4>
            </Link>
          );
        })}
    </ul>
  );
};

export { NotesList };
