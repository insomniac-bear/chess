import styles from './button.module.css';
import type { FC } from 'react';
import type { IButtonProps } from './button.props';

import { useMemo } from 'react';
import cn from 'classnames';

import * as Icons from '../icons';

export const Button: FC<IButtonProps> = ({
  children,
  btnType,
  className,
  onClick,
  disabled,
  icon = 'AddIcon',
}) => {
  const buttonClass = cn(styles[btnType], {
    [className ?? '']: className,
  });

  const iconToRender = btnType === 'icon'
    ? useMemo(() => {
        if (icon === undefined) {
          return <></>
        } else {
          const Icon = Icons[icon];
          return <Icon />
        }
      }, [icon])
    : '';

  if (btnType === 'icon') {
    return (
      <button
        className={buttonClass}
        onClick={onClick}
        disabled={disabled}
      >
        { iconToRender }
      </button>
    );
  }

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
