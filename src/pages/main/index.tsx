import { FC } from 'react';
import { Filter, Notes } from 'components';

const Main: FC = () => {
  return (
    <div className="wrapper grid-wrapper">
      <Filter />
      <Notes />
    </div>
  );
};

export { Main };
