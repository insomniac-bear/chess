import CellModel from '../Cell.model';
import { Colors } from '../types';
import Figure from './Figure.model';
import blackLogo from '../../images/black-bishop.svg';
import whiteLogo from '../../images/white-bishop.svg';
import { FigureNames } from '../types';

class BishopModel extends Figure {
  constructor(color: Colors, cell: CellModel) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }
}

export default BishopModel;
