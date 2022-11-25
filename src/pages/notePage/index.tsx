import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from 'store';
import { useSetLocalStorageNotes, convertDate } from 'utils';
import { Textarea } from 'components';
import { PATHS } from '../../constants';
import Sprite from '../../assets/sprite.svg';
import './style.scss';

const NotePage: FC = () => {
  const { main } = PATHS;

  const location = useLocation();
  const noteId = location.pathname.slice(1);

  const { data } = useAppSelector(({ notes }) => notes);
  const note = data.find(({ id }) => id === noteId);

  useSetLocalStorageNotes();

  return (
    <div className="wrapper">
      <div className="note-header mt-2 mb-2">
        <Link to={main} className="button box-shadow">
          <svg className="button__icon">
            <use xlinkHref={`${Sprite}#back`} />
          </svg>
        </Link>
        <h4 className="h4">{note && note.time && convertDate(note.time)}</h4>
      </div>
      <Textarea note={note} />
      <ul className="tag-list mr-1">
        {note &&
          note.tags &&
          note.tags.map((tag) => {
            return <li className="tag-list__item box-shadow pa-1">{tag}</li>;
          })}
      </ul>
    </div>
  );
};

export { NotePage };