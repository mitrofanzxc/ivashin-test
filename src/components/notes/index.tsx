import { FC } from 'react';
import { Button } from 'components';
import './style.scss';

const Notes: FC = () => {
  return (
    <main className="main box-shadow pa-2">
      <div className="main__header pb-2">
        <h2>Notes</h2>
        <Button icon="add" />
      </div>
    </main>
  );
};

export { Notes };
