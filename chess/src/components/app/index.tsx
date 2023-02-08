// Реализуем отображение доски
import type { FC } from 'react';
import { Board } from '../board';
import { BoardModel } from '../../models/board/board.model';

export const App: FC = () => {
  const board = new BoardModel();
  board.initialBoard('chess');

  return (
    <div>
      <Board board={board.getBoard()} />
    </div>
  );
};
