import { FC } from 'react';
import { Button } from 'components';
import './style.scss';

const Notes: FC = () => {
  return (
    <main className="box-shadow main">
      <div className="main__header">
        <h2>Notes</h2>
        <Button />
      </div>
    </main>
  );
};

export { Notes };
