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
  selectedTargetCell: ICellCords | null,
}

const initialState: IInitialState = {
  board: mockBoard,
  players: { 0: 'white', 1: 'black' },
  currentPlayer: '0',
  selectedFigure: null,
  targetCells: [],
  selectedTargetCell: null,
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
      const allTargetsCoord = getFigureTargetCells(figureCords, figureType, figureColor);

      state.targetCells = allTargetsCoord.filter((targetCellCoord) => state.board[targetCellCoord.y][targetCellCoord.x] === 0);
    },

    moveFigure (state, action: PayloadAction<ICellCords>) {
      if (state.selectedFigure !== null) {
        state.board[action.payload.y][action.payload.x] = state.board[state.selectedFigure.y][state.selectedFigure.x];
        state.board[state.selectedFigure?.y][state.selectedFigure?.x] = 0;
        state.selectedFigure = null;
        state.targetCells = [];
      }
    },
  },

});

export const { setSelectedFigure, moveFigure } = activeGameSlice.actions;
