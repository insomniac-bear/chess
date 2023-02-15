/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { ICellProps } from './cell.props';
import type { FC } from 'react';
import type { IFigures } from '../figures';
import cn from 'classnames';
import styles from './cell.module.css';
import { extractFigureCharacteristics } from '../../utils';
import * as figures from '../figures';
import { useAppSelector as useSelector, useAppDispatch as useDispatch } from '../../services/hooks';
import { setSelectedFigure } from '../../services/slices/active-game';

export const Cell: FC<ICellProps> = ({ color, value, cords }) => {
  const {
    selectedFigure: activeCellCords,
    players,
    currentPlayer,
    targetCells,
  } = useSelector((store) => store.game);
  const { id } = useSelector((store) => store.player);
  const dispatch = useDispatch()
  const figureCharacteristics = extractFigureCharacteristics(value);
  const Figure = figures[figureCharacteristics?.figure as keyof IFigures];
  const isActive = cords.x === activeCellCords?.x && cords.y === activeCellCords?.y;
  const isTargetCell = targetCells.find((it) => it.x === cords.x && it.y === cords.y);
  const cellClass = cn(styles.container, {
    [styles.container_black]: color === 'black',
    [styles.container_active]: isActive,
    [styles.container_target]: isTargetCell,
  });

  const onCellClick = (): void => {
    if (+currentPlayer !== id) {
      return;
    }
    if (value === 0 || players[id] !== figureCharacteristics?.color) {
      return;
    }
    dispatch(setSelectedFigure({
      figureCords: cords,
      figureType: figureCharacteristics.figure,
      figureColor: figureCharacteristics.color,
    }));
  };

  return (
    <div className={cellClass} onClick={onCellClick}>
      {figureCharacteristics && <Figure color={figureCharacteristics.color} />}
    </div>
  );
};

// Убрать отключение правила для файла!
