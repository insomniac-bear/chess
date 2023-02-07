import BoardModel from "../../models/Board.model";
import PlayerModel from '../../models/Player.model';

interface IBoardProps {
  board: BoardModel;
  currentPlayer: PlayerModel | null;
  setBoard: (board: BoardModel) => void;
  swapPlayer: () => void;
}

export default IBoardProps;