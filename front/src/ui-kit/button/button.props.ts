import type { HTMLProps } from 'react';
import type { IIcons } from '../icons';

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  btnType: 'primary' | 'secondary' | 'text' | 'icon';
  icon?: keyof IIcons;}
