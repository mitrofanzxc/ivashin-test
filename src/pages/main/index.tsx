import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Notes, Textarea } from 'components';
import { PATHS } from '../../constants';
import Sprite from '../../assets/sprite.svg';

const Main: FC = () => {
  const { main } = PATHS;

  return (
    <>
      <div className="wrapper grid-wrapper mt-2">
        <Filter />
        <Notes />
      </div>
      <div className="wrapper">
        <div className="note-header">
          <Link to={main} className="button box-shadow mb-2">
            <svg className="button__icon">
              <use xlinkHref={`${Sprite}#back`} />
            </svg>
          </Link>
          <h4>{new Intl.DateTimeFormat('en-US').format(new Date())}</h4>
        </div>
        <Textarea />
      </div>
    </>
  );
};

export { Main };
