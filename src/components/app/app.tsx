import { FC } from 'react';
import Board from '../board/board';
import './app.css';

export const App: FC = () => {
  return (
    <div className="app">
      <Board />
    </div>
  );
};
