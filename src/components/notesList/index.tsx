import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'store';
import { convertDate } from 'utils';
import './style.scss';

const NotesList: FC = () => {
  const { data: notesData, currentData: currentNotesData } = useAppSelector(({ notes }) => notes);
  const { data: filterTagArray } = useAppSelector(({ filter }) => filter);

  return (
    <ul className="notes-list">
      {/* Если фильтр активен - вывод перечисления активных фильтров */}
      {filterTagArray && filterTagArray.length > 0 && (
        <h4 className="h4">
          Filtering by:
          {filterTagArray.map((value, index) => {
            return <span key={`tag-${value}-${index}`} className="fw-medium">{` ${value}`}</span>;
          })}
        </h4>
      )}

      {/* Если фильтр активен и совпадения не найдены - вывод соответствующего сообщения */}
      {filterTagArray && filterTagArray.length > 0 && !currentNotesData.length && (
        <h2 className="h2">No posts were found matching these filters...</h2>
      )}

      {/* Если фильтр неактивен - вывод начальной базы */}
      {filterTagArray &&
        !filterTagArray.length &&
        !currentNotesData.length &&
        notesData &&
        notesData.map(({ id, time, value }) => {
          return (
            <Link key={id} className="notes-list__item box-shadow pa-2" to={`/${id}`}>
              <h3 className="h3">{value.length > 30 ? `${value.slice(0, 30)}...` : value}</h3>
              <h4 className="h4">{convertDate(time)}</h4>
            </Link>
          );
        })}

      {/* Если фильтр и совпадения найдены - вывод соответствующие совпадения */}
      {filterTagArray &&
        filterTagArray.length > 0 &&
        currentNotesData.length > 0 &&
        currentNotesData.map(({ id, time, value }) => {
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
