import type { ICellProps } from './cell.props';
import type { FC } from 'react';
import cn from 'classnames';
import styles from './cell.module.css';

export const Cell: FC<ICellProps> = ({ color, value }) => {
  console.log(color);
  const cellClass = cn(styles.container, {
    [styles.container_black]: color === 'black',
  });

  return <div className={cellClass}>{value}</div>;
};
