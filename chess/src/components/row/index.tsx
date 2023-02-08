import type { FC } from 'react';
import styles from './row.module.css';
import { Cell } from '../cell';
import type { IRowProps } from './row.props';
import { isOdd } from '../../utils';

export const Row: FC<IRowProps> = ({ row, rowNumber, activeCellCoord, setActiveCell }) => {
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

        const isActiveCell = activeCellCoord.y === rowNumber && activeCellCoord.x === index;
        const setActiveCellCoords = (): void => {
          setActiveCell({ x: index, y: rowNumber });
        };

        return <Cell
          key={index}
          color={calculatedColor}
          value={cell}
          isActive={isActiveCell}
          setActiveCellCoords={setActiveCellCoords}
        />;
      })}
    </ul>
  );
};
