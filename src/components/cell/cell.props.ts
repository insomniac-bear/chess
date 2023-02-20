import type { ICellCords, TCellValue } from '../../types/cell.types';

export interface ICellProps {
  color: 'white' | 'black';
  value: TCellValue;
  cords: ICellCords
}