import styles from './button.module.css';
import type { FC } from 'react';
import type { IButtonProps } from './button.props';
import type { To } from 'react-router-dom';

import { useMemo } from 'react';
import cn from 'classnames';

import * as Icons from '../icons';
import { Link } from 'react-router-dom';

export const Button: FC<IButtonProps> = ({
  children,
  btnType,
  className,
  onClick,
  disabled,
  icon = 'AddIcon',
  as = 'button',
  to,
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

  const content = btnType === 'icon'
    ? iconToRender
    : children;

  if (as === 'link') {
      return (
        <Link to={to as To} className={buttonClass}>{ content }</Link>
      );
  }

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      { content }
    </button>
  );
};
