import type { ICellCords } from './../types/cell.types';
import type { TFigure } from '../types/figure.types';
import type { IColor } from '../types/color.types';
import type { TBoard } from '../types/board.types';

export const getFigureTargetCells = (
  figureCords: ICellCords,
  figureType: TFigure,
  figureColor: IColor,
  board: TBoard
): ICellCords[] => {
  switch (figureType) {
    case ('Pawn'): {
      return getPawnTargetCells(figureCords, figureColor, board)
    }
    default: {
      return []
    }
  }
};

const getPawnTargetCells = (
  figureCords: ICellCords,
  figureColor: IColor,
  board: TBoard
): ICellCords[] => {
  switch (figureColor) {
    case ('black'): {
      if (figureCords.y === 1) {
        if (board[figureCords.y + 1][figureCords.x] === 0) {
          return [
            {
              x: figureCords.x,
              y: figureCords.y + 1,
            },
            {
              x: figureCords.x,
              y: figureCords.y + 2,
            },
          ]
        } else {
          return [];
        }
      } else {
        return [{ x: figureCords.x, y: figureCords.y + 1 }];
      }
    }
    case ('white'): {
      if (figureCords.y === 6) {
        if (board[figureCords.y - 1][figureCords.x] === 0) {
          return [
            {
              x: figureCords.x,
              y: figureCords.y - 1,
            },
            {
              x: figureCords.x,
              y: figureCords.y - 2,
            },
          ]
        } else {
          return [];
        }
      } else {
        return [{ x: figureCords.x, y: figureCords.y - 1 }];
      }
    }
    default: {
      return []
    }
  }
}
