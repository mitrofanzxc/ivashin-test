import { FC } from 'react';
import Sprite from '../../assets/sprite.svg';
import './styles.scss';

const Button: FC = () => {
  return (
    <button className="button box-shadow" type="button">
      <svg className="button__icon">
        <use xlinkHref={`${Sprite}#add`} />
      </svg>
    </button>
  );
};

export { Button };
