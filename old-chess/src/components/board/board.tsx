import { FC, Fragment, useState, useEffect } from 'react';
import Cell from '../cell/cell';
import IBoardProps from './board.props';
import CellModel from '../../models/Cell.model';

const Board: FC<IBoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {
  const [selectedCell, setSelectedCell] = useState<CellModel | null>(null);

  const isSelected = (x: number, y: number) => {
    return selectedCell?.x === x && selectedCell?.y === y;
  };

  const onClick = (cell: CellModel) => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      swapPlayer()
      setSelectedCell(null);
      updateBoard();
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  };

  const highlightCells = () => {
    board.highlightCells(selectedCell);
    updateBoard();
  };

  const updateBoard = () => {
    const newBoard = board.getCopiedBoard();
    setBoard(newBoard);
  };

  useEffect(() => {
    highlightCells();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCell]);

  return (
    <div>
      <h3>Текущий игрок: {currentPlayer?.color}</h3>
      <div className="board">
        {board.cells.map((row, index) => (
          <Fragment key={index}>
            {row.map((cell) => (
              <Cell
                onHandleClick={onClick}
                cell={cell}
                key={cell.id}
                isSelected={isSelected(cell.x, cell.y)}
              />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Board;
