import CellModel from '../Cell.model';
import { Colors, FigureNames } from '../types';
import blackLogo from '../../images/black-rook.svg';
import whiteLogo from '../../images/white-rook.svg';
import Figure from './Figure.model';

class RookModel extends Figure {
  constructor(color: Colors, cell: CellModel) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }

  canMove(target: CellModel): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    if (this.cell.isEmptyVertical(target)) {
      return true;
    }

    if (this.cell.isEmptyHorizontal(target)) {
      return true;
    }
    return false;
  }
}

export default RookModel;
