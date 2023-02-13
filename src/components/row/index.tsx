import type { FC } from 'react';
import styles from './row.module.css';
import { Cell } from '../cell';
import type { IRowProps } from './row.props';
import { isOdd } from '../../utils';

export const Row: FC<IRowProps> = ({ row, rowNumber }) => {
  let calculatedColor: 'black' | 'white';

  return (
    <ul className={styles.container}>
      {row.map((cell, index) => {
        if (isOdd(rowNumber)) {
          if (isOdd(index)) {
            calculatedColor = 'white';
          } else {
            calculatedColor = 'black';
          }
        } else {
          if (isOdd(index)) {
            calculatedColor = 'black';
          } else {
            calculatedColor = 'white';
          }
        }

        return <Cell
          key={index}
          color={calculatedColor}
          value={cell}
          cords={{ x: index, y: rowNumber }}
        />;
      })}
    </ul>
  );
};
