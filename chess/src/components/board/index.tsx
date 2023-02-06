import { FC } from 'react';
import { IBoard } from './board.props';
import { Row } from '../row';

const isOdd = (x: number): boolean => {
  if (x % 2 === 0) {
    return true;
  } else {
    return false
  }
};

export const Board: FC<IBoard> = ({ board }) => {
  return(
    <ul>
      {
        board.map((row, index) => <Row row={row} />)
      }
    </ul>
  );
}