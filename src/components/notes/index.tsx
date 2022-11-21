import { FC } from 'react';
import { Button } from 'components';
import './style.scss';

const Notes: FC = () => {
  return (
    <main className="main box-shadow">
      <div className="main__header">
        <h2>Notes</h2>
        <Button icon="add" />
      </div>
    </main>
  );
};

export { Notes };
