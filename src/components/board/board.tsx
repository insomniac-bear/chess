import { FC, Fragment, useState } from 'react';
import Cell from '../cell/cell';
import IBoardProps from './board.props';
import CellModel from '../../models/Cell.model';

const Board: FC<IBoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<CellModel | null>(null);

  const isSelected = (x: number, y: number) => {
    return selectedCell?.x === x && selectedCell?.y === y;
  };

  const onClick = (cell: CellModel) => {
    if (cell.figure) {
      setSelectedCell(cell);
    }
  }

  return <div className="board">
    {board.cells.map((row, index) =>
    <Fragment key={index}>
      {row.map(cell =>
        <Cell
          onHandleClick={onClick}
          cell={cell}
          key={cell.id}
          isSelected={isSelected(cell.x, cell.y)}
        ></Cell>
      )}
    </Fragment>
    )}
  </div>;
};

export default Board;
