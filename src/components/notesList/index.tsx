import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'store';
import { convertDate } from 'utils';
import './style.scss';

const NotesList: FC = () => {
  const { data: notesData } = useAppSelector(({ notes }) => notes);
  const { data: filterTagArray } = useAppSelector(({ filter }) => filter);

  return (
    <ul className="notes-list">
      {filterTagArray && filterTagArray.length > 0 && (
        <h4 className="h4">
          Filtering by:
          {filterTagArray.map((value, index) => {
            return <span key={`tag-${value}-${index}`} className="fw-medium">{` ${value}`}</span>;
          })}
        </h4>
      )}
      {notesData &&
        notesData.map(({ id, time, value }) => {
          return (
            <Link key={id} className="notes-list__item box-shadow pa-2" to={`/${id}`}>
              <h3 className="h3">{value.length > 30 ? `${value.slice(0, 30)}...` : value}</h3>
              <h4 className="h4">{convertDate(time)}</h4>
            </Link>
          );
        })}
      {!notesData.length && <h2 className="h2">No posts were found matching these filters...</h2>}
    </ul>
  );
};

export { NotesList };
