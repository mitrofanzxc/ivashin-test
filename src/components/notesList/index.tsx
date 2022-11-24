import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'store';
import './style.scss';

const NotesList: FC = () => {
  const { data } = useAppSelector(({ notes }) => notes);

  return (
    <ul className="notes-list">
      <li className="notes-list__item box-shadow pa-2">
        <h3>Note1</h3>
        <h4>{new Intl.DateTimeFormat('en-US').format(new Date())}</h4>
      </li>
      <li className="notes-list__item box-shadow pa-2">
        <h3>Note2</h3>
        <h4>{new Intl.DateTimeFormat('en-US').format(new Date())}</h4>
      </li>
      <li className="notes-list__item box-shadow pa-2">
        <h3>Note3</h3>
        <h4>{new Intl.DateTimeFormat('en-US').format(new Date())}</h4>
      </li>
      {data &&
        data.map(({ id, time, value }) => {
          return (
            <Link className="notes-list__item box-shadow pa-2" to={`/${id}`}>
              <h3>{value}</h3>
              <h4>{time}</h4>
            </Link>
          );
        })}
    </ul>
  );
};

export { NotesList };
