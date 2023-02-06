import { FC } from 'react';
import cn from 'classnames'
import { ICellProps } from './cell.props';
import styles from './cell.module.css';

export const Cell: FC<ICellProps> = ({ color }) => {
  const cellClass = cn(styles.container, {
    [styles.container__black]: color === 'black',
  });

  return(
    <div className={cellClass}></div>
  )
};
