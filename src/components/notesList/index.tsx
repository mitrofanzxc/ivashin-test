import { FC } from 'react';
import './style.scss';

const NotesList: FC = () => {
  return (
    <ul className="notes-list">
      <li className="notes-list__item box-shadow pa-2">
        <h3>Note1</h3>
        <h4>{new Intl.DateTimeFormat('en-US').format(new Date())}</h4>
      </li>
      <li className="notes-list__item box-shadow pa-2">Note2</li>
      <li className="notes-list__item box-shadow pa-2">Note3</li>
    </ul>
  );
};

export { NotesList };
