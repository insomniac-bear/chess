/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { ICellProps } from './cell.props';
import type { FC } from 'react';
import type { IFigures } from '../figures';
import cn from 'classnames';
import styles from './cell.module.css';
import { extractFigureCharacteristics } from '../../utils';
import * as figures from '../figures';

export const Cell: FC<ICellProps> = ({ color, value, isActive, setActiveCellCoords }) => {
  const figureCharacteristics = extractFigureCharacteristics(value);
  const Figure = figures[figureCharacteristics?.figure as keyof IFigures];

  const cellClass = cn(styles.container, {
    [styles.container_black]: color === 'black',
    [styles.container_active]: isActive,
  });

  const onCellClick = (): void => {
    setActiveCellCoords();
  };

  return (
    <div className={cellClass} onClick={onCellClick}>
      {figureCharacteristics && <Figure color={figureCharacteristics.color} />}
    </div>
  );
};

// Убрать отключение правила для файла!
