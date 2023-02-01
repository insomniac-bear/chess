import { nanoid } from 'nanoid';
import { Colors } from '../types';
import logo from '../../images/black-king.svg';
import CellModel from '../Cell.model';
import { FigureNames } from '../types';

class FigureModel {
  color: Colors;
  logo: typeof logo | null;
  cell: CellModel;
  name: FigureNames;
  id: string;

  constructor(color: Colors, cell: CellModel) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = nanoid();
  }

  canMove(target: CellModel): boolean {
    if (target.figure?.color === this.color) {
      return false;
    }

    if (target.figure?.name === FigureNames.KING) {
      return false;
    }

    return true;
  }

  moveFigure(target: CellModel) {}
}

export default FigureModel;
