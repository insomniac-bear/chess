import type { TBoard } from '../../types/board.types';

const initialChessBoard: TBoard = [
  [11, 12, 13, 14, 15, 13, 12, 11],
  [10, 10, 10, 10, 10, 10, 10, 10],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [20, 20, 20, 20, 20, 20, 20, 20],
  [21, 22, 23, 24, 25, 23, 22, 21],
];

export const initialBoards = {
  chess: initialChessBoard,
};
