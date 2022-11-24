import { FC } from 'react';
import { Button, NotesList } from 'components';
import './style.scss';

const Notes: FC = () => {
  return (
    <main className="main box-shadow pa-2">
      <div className="main__header mb-5 pb-2">
        <h2>Notes</h2>
        <Button icon="add" />
      </div>
      <NotesList />
    </main>
  );
};

export { Notes };
