import { FC } from 'react';
import { IBoard } from './board.props';
import { Row } from '../row';

export const Board: FC<IBoard> = ({ board }) => {
  return (
    <ul>
      {board.map((row, index) => (
        <Row row={row} rowNumber={index} />
      ))}
    </ul>
  );
};
