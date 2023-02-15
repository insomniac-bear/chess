import { type TBoard } from './../../types/board.types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { mockBoard } from '../../mockData/board';
import { type ICellCords } from '../../types/cell.types';
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
      state.targetCells = getFigureTargetCells(figureCords, figureType, figureColor);
    },
  },

});

export const { setSelectedFigure } = activeGameSlice.actions;
