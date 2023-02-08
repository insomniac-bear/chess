import type { FC } from 'react';
import type { IBoard } from './board.props';
import type { IActiveCellCoords } from '../types/active-coords.type';
import { useState } from 'react';
import { Row } from '../row';

export const Board: FC<IBoard> = ({ board }) => {
  const [activeCellCoords, setActiveCellCoords] = useState<IActiveCellCoords>({
    x: undefined,
    y: undefined,
  })

  return (
    <ul>
      {board.map((row, index) => (
        <Row key={index} row={row} rowNumber={index} activeCellCoord={activeCellCoords} setActiveCell={setActiveCellCoords} />
      ))}
    </ul>
  );
};
