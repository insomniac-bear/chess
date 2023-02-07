// Реализуем отображение доски

import { FC } from 'react';
import { Board } from '../board';
import { mockBoard } from '../../mockData/board';

export const App: FC = () => {
  return (
    <div>
      <Board board={mockBoard} />
    </div>
  );
};
