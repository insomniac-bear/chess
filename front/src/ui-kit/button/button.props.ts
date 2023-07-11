import type { HTMLProps } from 'react';
import type { IIcons } from '../icons';
import type { To } from 'react-router-dom';

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  as?: 'button' | 'link';
  btnType: 'primary' | 'secondary' | 'text' | 'icon';
  icon?: keyof IIcons;
  to?: To;
}
