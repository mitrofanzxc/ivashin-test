import { FC, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch, addTagToFilterFromNote, addDateToNote } from 'store';
import { useSetLocalStorage } from 'hooks';
import { convertDate } from 'utils';
import { Textarea, Button } from 'components';
import { PATHS } from '../../constants';
import Sprite from '../../assets/sprite.svg';
import './style.scss';

const NotePage: FC = () => {
  const { main } = PATHS;
  const dispatch = useAppDispatch();

  // Инициализация состояний для отслеживания изменений в заметке
  const [initialTextareaValue, setInitialTextareaValue] = useState<string>('');
  const [currentTextareaValue, setCurrentTextareaValue] = useState<string>('');

  const location = useLocation();
  const noteId = location.pathname.slice(1);

  const { data } = useAppSelector(({ notes }) => notes);
  const note = data.find(({ id }) => id === noteId);

  // Добваление тегов из заметки в общий список тегов на главной странице
  const handleAddTagToFilterFromNote = () => {
    if (note) {
      dispatch(addTagToFilterFromNote(note.tags));
    }
  };

  // Обновить время заметки, если произошли изменения
  const updateNote = () => {
    if (note) {
      if (initialTextareaValue !== currentTextareaValue) {
        dispatch(addDateToNote({ id: note.id, value: new Date().toISOString() }));
        setInitialTextareaValue('');
        setCurrentTextareaValue('');
      }
    }

    handleAddTagToFilterFromNote();
    setInitialTextareaValue('');
    setCurrentTextareaValue('');
  };

  // Колбеки для textarea
  const handleInitialTextareaValue = (value: string) => {
    setInitialTextareaValue(value);
  };

  const handleCurrentTextareaValue = (value: string) => {
    setCurrentTextareaValue(value);
  };

  useEffect(() => {
    handleAddTagToFilterFromNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useSetLocalStorage('notes');

  return (
    <div className="wrapper">
      <div className="note-header mt-2 mb-2">
        <Link to={main} className="button box-shadow" onClick={updateNote}>
          <svg className="button__icon">
            <use xlinkHref={`${Sprite}#back`} />
          </svg>
        </Link>
        <h4 className="h4">{note && note.time && convertDate(note.time)}</h4>
        <Button icon="save" onClick={updateNote} />
      </div>
      <Textarea
        note={note}
        handleInitialTextareaValue={handleInitialTextareaValue}
        handleCurrentTextareaValue={handleCurrentTextareaValue}
      />
      <ul className="tag-list mr-1">
        {note &&
          note.tags &&
          note.tags.map((value, index) => {
            return (
              <li key={`note-tag-${value}-${index}`} className="tag-list__item box-shadow pa-1">
                {value}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export { NotePage };
