import { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch, addDataToModal, openModal } from 'store';
import { useSetLocalStorage } from 'hooks';
import { convertDate } from 'utils';
import Sprite from '../../assets/sprite.svg';
import './style.scss';

const NotesList: FC = () => {
  const { data: notesData, currentData: currentNotesData } = useAppSelector(({ notes }) => notes);
  const { data: filterTagArray } = useAppSelector(({ filter }) => filter);
  const dispatch = useAppDispatch();

  // Удаление заметки
  const handleRemoveNote = (event: MouseEvent<HTMLButtonElement>, id: string) => {
    // Для отмены перехода по роутеру, при клике на кнопку удаления заметки
    event.preventDefault();

    dispatch(addDataToModal({ type: 'note', value: id }));
    dispatch(openModal());
  };

  // Обработчик для заголовков заметок
  const handleNoteHeader = (value: string) => {
    if (value.length > 30) {
      return `${value.slice(0, 30)}...`;
    }

    if (!value.length) {
      return 'Empty note';
    }

    return value;
  };

  useSetLocalStorage('notes');

  return (
    <ul className="notes-list">
      {/* Если фильтр активен - вывод перечисления активных фильтров */}
      {filterTagArray && filterTagArray.length > 0 && (
        <h4 className="h4">
          Filtering by:
          {filterTagArray.map((value, index) => {
            return (
              <span
                key={`selected-filter-tag-${value}-${index}`}
                className="fw-medium"
              >{` ${value}`}</span>
            );
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
              <h3 className="h3">{handleNoteHeader(value)}</h3>
              <h4 className="h4">{convertDate(time)}</h4>
              <button
                className="button box-shadow"
                type="button"
                onClick={(event) => handleRemoveNote(event, id)}
              >
                <svg className="button__icon">
                  <use xlinkHref={`${Sprite}#delete`} />
                </svg>
              </button>
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
              <h3 className="h3">{handleNoteHeader(value)}</h3>
              <h4 className="h4">{convertDate(time)}</h4>
              <button
                className="button box-shadow"
                type="button"
                onClick={(event) => handleRemoveNote(event, id)}
              >
                <svg className="button__icon">
                  <use xlinkHref={`${Sprite}#delete`} />
                </svg>
              </button>
            </Link>
          );
        })}
    </ul>
  );
};

export { NotesList };
