import { extractFigureCharacteristics } from './../../utils/extract-figure-characteristics';
import type { TFigure } from './../../types/figure.types';
import type { TBoard } from './../../types/board.types';
import type { ICellCords } from '../../types/cell.types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { mockBoard } from '../../mockData/board';
import { getFigureTargetCells } from '../../utils';

interface IInitialState {
  board: TBoard,
  players: Record<number, 'white' | 'black'>, // number - id игроков
  currentPlayer: string,
  selectedFigure: ICellCords | null,
  targetCells: ICellCords[] | [],
  attackedCells: ICellCords[] | [],
  selectedTargetCell: ICellCords | null,
  trophies: {
    white: TFigure[],
    black: TFigure[],
  }
}

const initialState: IInitialState = {
  board: mockBoard,
  players: { 0: 'white', 1: 'black' },
  currentPlayer: '0',
  selectedFigure: null,
  targetCells: [],
  attackedCells: [],
  selectedTargetCell: null,
  trophies: {
    white: [],
    black: [],
  },
};

export const activeGameSlice = createSlice({
  name: 'active-game',
  initialState,
  reducers: {
    setSelectedFigure (state, action: PayloadAction<any>) {
      const {
        figureCords,
        figureType,
        figureColor,
      } = action.payload;

      state.selectedFigure = figureCords;
      const { targetCells, attackedCells } = getFigureTargetCells(figureCords, figureType, figureColor, state.board);

      state.attackedCells = attackedCells;
      state.targetCells = targetCells.filter((targetCellCoord) => {
        return state.board[targetCellCoord.y][targetCellCoord.x] === 0
      });
    },

    moveFigure (state, action: PayloadAction<ICellCords>) {
      if (state.selectedFigure !== null) {
        state.board[action.payload.y][action.payload.x] = state.board[state.selectedFigure.y][state.selectedFigure.x];
        state.board[state.selectedFigure?.y][state.selectedFigure?.x] = 0;
        state.selectedFigure = null;
        state.targetCells = [];
      }
    },
    attackFigure (state, action: PayloadAction<ICellCords>) {
      const { x, y } = action.payload;
      const figureCharacteristics = extractFigureCharacteristics(state.board[y][x]);
      if (figureCharacteristics !== undefined) {
        state.trophies[figureCharacteristics.color].push(figureCharacteristics.figure)
        if (state.selectedFigure !== null) {
          state.board[action.payload.y][action.payload.x] = state.board[state.selectedFigure.y][state.selectedFigure.x];
          state.board[state.selectedFigure?.y][state.selectedFigure?.x] = 0;
          state.selectedFigure = null;
          state.targetCells = [];
          state.attackedCells = [];
        }
      }
    },
  },

});

export const { setSelectedFigure, moveFigure, attackFigure } = activeGameSlice.actions;
