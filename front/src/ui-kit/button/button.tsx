import styles from './button.module.css';
import type { FC } from 'react';
import type { IButtonProps } from './button.props';
import cn from 'classnames';

export const Button: FC<IButtonProps> = ({
  children,
  btnType,
  className,
  onClick,
  disabled,
}) => {
  const buttonClass = cn(styles[btnType], {
    [className ?? '']: className,
  });

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
