import { FC } from 'react';
import { Filter, Notes, Modal } from 'components';

const Main: FC = () => {
  return (
    <>
      <div className="wrapper grid-wrapper mt-2">
        <Filter />
        <Notes />
      </div>
      <Modal />
    </>
  );
};

export { Main };
