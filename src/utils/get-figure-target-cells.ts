import type { ICellCords } from './../types/cell.types';
import type { TFigure } from '../types/figure.types';
import type { IColor } from '../types/color.types';
import type { TBoard } from '../types/board.types';

export const getFigureTargetCells = (
  figureCords: ICellCords,
  figureType: TFigure,
  figureColor: IColor,
  board: TBoard
): { targetCells: ICellCords[], attackedCells: ICellCords[] } => {
  switch (figureType) {
    case ('Pawn'): {
      const targetCells = getPawnTargetCells(figureCords, figureColor, board);
      const attackedCells = getPawnAttackedCells(figureCords, figureColor, board);

      return {
        targetCells,
        attackedCells,
      }
    }
    default: {
      return {
        targetCells: [],
        attackedCells: [],
      };
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

const getPawnAttackedCells = (
  figureCords: ICellCords,
  figureColor: IColor,
  board: TBoard
): ICellCords[] => {
  const cells = [];

  const checkBlackFigure = (x: number, y: number): boolean => {
    if (board[y][x] >= 10 && board[y][x] < 20) {
      return true;
    }
    return false;
  }

  const checkWhiteFigure = (x: number, y: number): boolean => {
    if (board[y][x] >= 20 && board[y][x] < 30) {
      return true;
    }
    return false;
  }

  switch (figureColor) {
    case ('black'): {
      if (checkWhiteFigure(figureCords.x + 1, figureCords.y + 1)) {
        cells.push({ x: figureCords.x + 1, y: figureCords.y + 1 });
      }
      if (checkWhiteFigure(figureCords.x - 1, figureCords.y + 1)) {
        cells.push({ x: figureCords.x - 1, y: figureCords.y + 1 });
      }
      break;
    }
    case ('white'): {
      if (checkBlackFigure(figureCords.x + 1, figureCords.y - 1)) {
        cells.push({ x: figureCords.x + 1, y: figureCords.y - 1 });
      }
      if (checkBlackFigure(figureCords.x - 1, figureCords.y - 1)) {
        cells.push({ x: figureCords.x - 1, y: figureCords.y - 1 });
      }
      break;
    }
    default: {
      return []
    }
  }
  return cells;
};
