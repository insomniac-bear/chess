/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { ICellProps } from './cell.props';
import type { FC } from 'react';
import type { IFigures } from '../figures';
import cn from 'classnames';
import styles from './cell.module.css';
import { extractFigure } from '../../utils';
import * as figures from '../figures';

export const Cell: FC<ICellProps> = ({ color, value }) => {
  const figureValue = extractFigure(value);

  const Figure = figures[figureValue?.figure as keyof IFigures];

  const cellClass = cn(styles.container, {
    [styles.container_black]: color === 'black',
  });

  return (
    <div className={cellClass}>
      {figureValue && <Figure color={figureValue.color} />}
    </div>
  );
};

// Убрать отключение правила для файла!
