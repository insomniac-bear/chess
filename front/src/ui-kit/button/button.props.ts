import type { HTMLProps } from 'react';

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  btnType: 'primary' | 'secondary' | 'text' | 'icon';
}
