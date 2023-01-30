// 49.20
// Баг с перескоком при первом ходе

import { FC, useEffect, useState } from 'react';
import Board from '../board/board';
import BoardModel from '../../models/Board.model';
import './app.css';

export const App: FC = () => {
  const [board, setBoard] = useState(new BoardModel());

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new BoardModel();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  return (
    <div className="app">
      <Board board={board} setBoard={setBoard} />
    </div>
  );
};
