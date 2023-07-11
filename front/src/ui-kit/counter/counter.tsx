import styles from './counter.module.css';
import type { FC } from 'react';
import type { ICounterProps } from './counter.props';
import cn from 'classnames'

export const Counter: FC<ICounterProps> = ({ count, className }) => {
  const counterStyles = cn(styles.counter, {
    [className ?? '']: className,
  });

  return (
    <span className={counterStyles}>
      {count}
    </span>
  );
}