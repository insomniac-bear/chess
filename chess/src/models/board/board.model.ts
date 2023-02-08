import type { TBoard } from '../../types/board.types';
import type { TBoardType } from './board.type';
import { initialBoards } from './const';

export class BoardModel {
  private board: TBoard;
  private type: TBoardType;

  constructor () {
    this.board = [];
    this.type = 'chess';
  }

  public initialBoard (type: TBoardType): void {
    this.type = type;
    this.board = initialBoards[type];
  }

  public setBoard (board: TBoard): void {
    this.board = board;
  }

  public getBoard (): TBoard {
    return this.board;
  }

  public getBoardType (): TBoardType {
    return this.type;
  }
}
