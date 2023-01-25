import { FC, Fragment } from 'react';
import Cell from '../cell/cell';
import IBoardProps from './board.props';

const Board: FC<IBoardProps> = ({ board, setBoard }) => {
  return <div className="board">
    {board.cells.map((row, index) =>
    <Fragment key={index}>
      {row.map(cell =>
        <Cell
          cell={cell}
          key={cell.id}
        ></Cell>
      )}
    </Fragment>
    )}
  </div>;
};

export default Board;
