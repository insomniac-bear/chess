import { nanoid } from 'nanoid';
import Board from './Board.model';
import { Colors } from './types';
import FigureModel from './figures/Figure.model';

class CellModel {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: FigureModel | null;
  board: Board;
  available: boolean; // Можешь ли переместиться на эту ячейку
  id: string; // Для реакт ключей

  constructor(board: Board, x: number, y: number, color: Colors, figure: FigureModel | null) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.available = false;
    this.id = nanoid();
  }

  public isEmpty() {
    return this.figure === null;
  }

  public isEnemy(target: CellModel): boolean {
    if (target.figure) {
      return this.figure?.color !== target.figure.color;
    }

    return false;
  }

  public isEmptyVertical(target: CellModel): boolean {
    if (this.x !== target.x) {
      return false;
    }

    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);

    for (let y = min + 1; y < max; y++) {
      if (!this.board.getCell(this.x, y).isEmpty()) {
        return false;
      }
    }

    return true;
  }

  public isEmptyHorizontal(target: CellModel): boolean {
    if (this.y !== target.y) {
      return false;
    }

    const min = Math.min(this.x, target.x);
    const max = Math.max(this.x, target.x);

    for (let x = min + 1; x < max; x++) {
      if (!this.board.getCell(x, this.y).isEmpty()) {
        return false;
      }
    }

    return true;
  }

  public isEmptyDiagonal(target: CellModel): boolean {
    const absX = Math.abs(target.x - this.x);
    const absY = Math.abs(target.y - this.y);

    if (absY !== absX) {
      return false;
    }

    const dy = this.y < target.y ? 1 : -1;
    const dx = this.x < target.x ? 1 : -1;

    for (let i = 1; i < absY; i++) {
      if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) {
        return false;
      }
    }
    return true;
  }

  private setFigure(figure: FigureModel) {
    this.figure = figure;
    this.figure.cell = this;
  }

  //  Перенести метод в класс доски!!!
  addLostFigure(figure: FigureModel) {
    figure.color === Colors.BLACK
      ? this.board.lostBlackFigures.push(figure)
      : this.board.lostWhiteFigures.push(figure);
  }

  moveFigure(target: CellModel) {
    if (this.figure?.canMove(target)) {
      this.figure.moveFigure(target);

      if(target.figure) {
        this.addLostFigure(target.figure);
      }

      target.setFigure(this.figure);
      this.figure = null;
    }
  }
}

export default CellModel;
