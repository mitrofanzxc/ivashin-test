import { FC } from 'react';
import { IButton } from 'interfaces';
import Sprite from '../../assets/sprite.svg';
import './styles.scss';

const Button: FC<IButton> = ({ icon, isOpen, onClick }) => {
  return (
    <button className="button box-shadow" type="button" onClick={onClick}>
      <svg className={`button__icon ${isOpen ? 'button__icon_active' : ''}`}>
        <use xlinkHref={`${Sprite}#${icon}`} />
      </svg>
    </button>
  );
};

export { Button };
