import type { TCellValue } from '../../types/cell.types';

export interface ICellProps {
  color: 'white' | 'black';
  value: TCellValue;
  isActive: boolean;
  setActiveCellCoords: () => void;
}
