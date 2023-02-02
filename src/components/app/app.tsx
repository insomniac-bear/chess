// 1.04.36
// Реализовать ход короля
// Отрефачить условия перемещения пешки
// Общий таймер на ход
// Сделать подсветку фигур того игрока, который сейчас ходит
// Подумать над D'n'D

import { FC, useEffect, useState } from 'react';
import Board from '../board/board';
import BoardModel from '../../models/Board.model';
import './app.css';
import PlayerModel from '../../models/Player.model';
import { Colors } from '../../models/types';
import LostFigures from '../lost-figures/lost-figures';
import Timer from '../timer/timer';

export const App: FC = () => {
  const [board, setBoard] = useState<BoardModel>(new BoardModel());
  const [currentPlayer, setCurrentPlayer] = useState<PlayerModel | null>(null);

  const whitePlayer = new PlayerModel(Colors.WHITE);
  const blackPlayer = new PlayerModel(Colors.BLACK);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function restart() {
    const newBoard = new BoardModel();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  const swapPlayerHandler = () => {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  };

  return (
    <div className="app">
      <Timer
        restart={restart}
        currentPlayer={currentPlayer}
      />
      <Board
        board={board}
        setBoard={setBoard}
        swapPlayer={swapPlayerHandler}
        currentPlayer={currentPlayer}
      />
      <div>
        <LostFigures title='Черные фигуры' figures={board.lostBlackFigures} />
        <LostFigures title='Белые фигуры' figures={board.lostWhiteFigures} />
      </div>
    </div>
  );
};
