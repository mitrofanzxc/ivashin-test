import { FC } from 'react';
import { IButton } from 'interfaces';
import Sprite from '../../assets/sprite.svg';
import './style.scss';

const Button: FC<IButton> = ({ icon, textContent, className, isInputOpen, onClick }) => {
  return (
    <button className={`button box-shadow ${className || ''}`} type="button" onClick={onClick}>
      {icon && (
        <svg className={`button__icon ${isInputOpen ? 'button__icon_active' : ''}`}>
          <use xlinkHref={`${Sprite}#${icon}`} />
        </svg>
      )}
      {textContent || ''}
    </button>
  );
};

export { Button };
