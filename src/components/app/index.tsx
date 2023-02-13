// Реализуем отображение доски
import type { FC } from 'react';
import { Board } from '../board';
import { useAppSelector as useSelector } from '../../services/hooks';

export const App: FC = () => {
  const board = useSelector((store) => store.game.board)

  return (
    <div>
      <Board board={board} />
    </div>
  );
};
