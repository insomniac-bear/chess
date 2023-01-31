import CellModel from '../Cell.model';
import { Colors, FigureNames } from '../types';
import blackLogo from '../../images/black-pawn.svg';
import whiteLogo from '../../images/white-pawn.svg';
import Figure from './Figure.model';

class PawnModel extends Figure {
  isFirstStep: boolean = true;

  constructor(color: Colors, cell: CellModel) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }

  canMove(target: CellModel): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
    const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

    if ((target.y === this.cell.y + direction || this.isFirstStep
      && (target.y === this.cell.y + firstStepDirection))
      && target.x === this.cell.x
      && this.cell.board.getCell(target.x, target.y).isEmpty()) {
      return true;
    }

    if (target.y === this.cell.y + direction
      && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
      && this.cell.isEnemy(target)) {
        return true;
    }

    return false;
  }
  moveFigure(target: CellModel) {
    super.moveFigure(target);
    this.isFirstStep = false;
  }
}

export default PawnModel;
