import BoardModel from "../../models/Board.model";

interface IBoardProps {
  board: BoardModel;
  setBoard: (board: BoardModel) => void;
}

export default IBoardProps;