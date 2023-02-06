import { FC } from 'react';
import { Cell } from '../cell';
import { IRowProps } from './row.props';

export const Row: FC<IRowProps> = ({ row }) => {
  return(
    <ul>
      {
        row.map(cell => <Cell color={cell.color} />)
      }
    </ul>
  );
}