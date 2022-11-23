import { FC } from 'react';
import { IButton } from 'interfaces';
import Sprite from '../../assets/sprite.svg';
import './styles.scss';

const Button: FC<IButton> = ({ icon, isInputOpen, onClick }) => {
  return (
    <button className="button box-shadow" type="button" onClick={onClick}>
      <svg className={`button__icon ${isInputOpen ? 'button__icon_active' : ''}`}>
        <use xlinkHref={`${Sprite}#${icon}`} />
      </svg>
    </button>
  );
};

export { Button };
