import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constants';
import Logo from '../../assets/logo.svg';
import './styles.scss';

const Header: FC = () => {
  const { main } = PATHS;

  return (
    <header className="wrapper box-shadow header">
      <Link to={main} className="logo">
        <img className="logo" src={Logo} alt="Logo" />
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
