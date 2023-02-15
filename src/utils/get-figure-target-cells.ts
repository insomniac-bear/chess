import { type ICellCords } from './../types/cell.types';
import { type TFigure } from '../types/figure.types';
import { type IColor } from '../types/color.types';

export const getFigureTargetCells = (
  figureCords: ICellCords,
  figureType: TFigure,
  figureColor: IColor
): ICellCords[] => {
  switch (figureType) {
    case ('Pawn'): {
      return getPawnTargetCells(figureCords, figureColor)
    }
    default: {
      return []
    }
  }
};

const getPawnTargetCells = (
  figureCords: ICellCords,
  figureColor: IColor
): ICellCords[] => {
  switch (figureColor) {
    case ('black'): {
      if (figureCords.y === 1) {
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
        return [{ x: figureCords.x, y: figureCords.y + 1 }];
      }
    }
    case ('white'): {
      if (figureCords.y === 6) {
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
        return [{ x: figureCords.x, y: figureCords.y - 1 }];
      }
    }
    default: {
      return []
    }
  }
}
