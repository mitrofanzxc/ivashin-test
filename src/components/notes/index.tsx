import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, NotesList } from 'components';
import { v4 as uuidv4 } from 'uuid';
import Sprite from '../../assets/sprite.svg';
import './style.scss';

const Notes: FC = () => {
  return (
    <main className="main box-shadow pa-2">
      <div className="main__header mb-5 pb-2">
        <h2>Notes</h2>
        <Button icon="add" />
        {/* <Link to={`/${uuidv4()}`} className="button box-shadow">
          <svg className="button__icon">
            <use xlinkHref={`${Sprite}#add`} />
          </svg>
        </Link> */}
      </div>
      <NotesList />
    </main>
  );
};

export { Notes };
