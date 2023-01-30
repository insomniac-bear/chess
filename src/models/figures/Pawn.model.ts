import CellModel from '../Cell.model';
import { Colors, FigureNames } from '../types';
import blackLogo from '../../images/black-pawn.svg';
import whiteLogo from '../../images/white-pawn.svg';
import Figure from './Figure.model';

class PawnModel extends Figure {
  constructor(color: Colors, cell: CellModel) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }

  canMove(target: CellModel): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    return true;
  }
}

export default PawnModel;
