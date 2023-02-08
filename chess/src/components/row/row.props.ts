import type { Dispatch, SetStateAction } from 'react';
import type { TCellValue } from '../../types/cell.types';
import type { IActiveCellCoords } from '../types/active-coords.type';

export interface IRowProps {
  row: TCellValue[];
  rowNumber: number;
  activeCellCoord: IActiveCellCoords;
  setActiveCell: Dispatch<SetStateAction<IActiveCellCoords>>;
}
