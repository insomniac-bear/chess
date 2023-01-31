import CellModel from '../Cell.model';
import { Colors, FigureNames } from '../types';
import blackLogo from '../../images/black-knight.svg';
import whiteLogo from '../../images/white-knight.svg';
import Figure from './Figure.model';

class KnightModel extends Figure {
  constructor(color: Colors, cell: CellModel) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KNIGHT;
  }

  canMove(target: CellModel): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
    // return true;
  }
}

export default KnightModel;
