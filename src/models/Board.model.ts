import Cell from './Cell.model';
import BishopModel from './figures/Bishop.model';
import KingModel from './figures/King.model';
import KnightModel from './figures/Knight.model';
import PawnModel from './figures/Pawn.model';
import QueenModel from './figures/Queen.model';
import RookModel from './figures/Rook.model';
import { Colors } from './types';

class Board {
  cells: Cell[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];

      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)); // Черные ячейки
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)); // Белые ячейки
        }
      }

      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new PawnModel(Colors.BLACK, this.getCell(i, 1));
      new PawnModel(Colors.WHITE, this.getCell(i, 6));
    }
  }

  private addKings() {
    new KingModel(Colors.BLACK, this.getCell(4, 0));
    new KingModel(Colors.WHITE, this.getCell(4, 7));
  }

  private addQueens() {
    new QueenModel(Colors.BLACK, this.getCell(3, 0));
    new QueenModel(Colors.WHITE, this.getCell(3, 7));
  }

  private addKnights() {
    new KnightModel(Colors.BLACK, this.getCell(1, 0));
    new KnightModel(Colors.BLACK, this.getCell(6, 0));
    new KnightModel(Colors.WHITE, this.getCell(1, 7));
    new KnightModel(Colors.WHITE, this.getCell(6, 7));
  }

  private addBishops() {
    new BishopModel(Colors.BLACK, this.getCell(2, 0));
    new BishopModel(Colors.BLACK, this.getCell(5, 0));
    new BishopModel(Colors.WHITE, this.getCell(2, 7));
    new BishopModel(Colors.WHITE, this.getCell(5, 7));
  }

  private addRooks() {
    new RookModel(Colors.BLACK, this.getCell(0, 0));
    new RookModel(Colors.BLACK, this.getCell(7, 0));
    new RookModel(Colors.WHITE, this.getCell(0, 7));
    new RookModel(Colors.WHITE, this.getCell(7, 7));
  }

  public addFigures() {
    this.addPawns();
    this.addKings();
    this.addKnights();
    this.addBishops();
    this.addQueens();
    this.addRooks();
  }
}

export default Board;
