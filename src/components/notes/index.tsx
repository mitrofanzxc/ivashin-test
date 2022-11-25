import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, addNote } from 'store';
import { NotesList } from 'components';
import { v4 as uuidv4 } from 'uuid';
import Sprite from '../../assets/sprite.svg';
import './style.scss';

const Notes: FC = () => {
  const dispatch = useAppDispatch();

  const noteId = uuidv4();
  const noteTime = new Date().toISOString();

  const handleAddNote = (id: string, time: string) => {
    const note = { id, time, tags: [], value: '' };
    dispatch(addNote(note));
  };

  return (
    <main className="main box-shadow pa-2">
      <div className="main__header mb-5 pb-2">
        <h2>Notes</h2>
        <Link
          to={`/${noteId}`}
          className="button box-shadow"
          onClick={() => handleAddNote(noteId, noteTime)}
        >
          <svg className="button__icon">
            <use xlinkHref={`${Sprite}#add`} />
          </svg>
        </Link>
      </div>
      <NotesList />
    </main>
  );
};

export { Notes };
