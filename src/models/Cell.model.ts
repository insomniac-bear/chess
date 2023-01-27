import { nanoid } from 'nanoid';
import Board from './Board.model';
import { Colors } from './types';
import Figure from './figures/Figure.model';

class CellModel {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  available: boolean; // Можешь ли переместиться на эту ячейку
  id: string; // Для реакт ключей

  constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.available = true;
    this.id = nanoid();
  }
}

export default CellModel;
