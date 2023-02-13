import type { FC } from 'react';
import type { IBoard } from './board.props';
import { Row } from '../row';

export const Board: FC<IBoard> = ({ board }) => {
  return (
    <ul>
      {board.map((row, index) => (
        <Row key={index} row={row} rowNumber={index} />
      ))}
    </ul>
  );
};
