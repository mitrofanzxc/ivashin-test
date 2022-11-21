import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constants';
import Sprite from '../../assets/sprite.svg';
import './styles.scss';

const Header: FC = () => {
  const { main } = PATHS;

  return (
    <header className="wrapper box-shadow header">
      <Link to={main} className="button box-shadow">
        <svg className="button__icon">
          <use xlinkHref={`${Sprite}#logo`} />
        </svg>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to={main}>Navigation</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
