import CellModel from "../../models/Cell.model";

interface ICellProps {
  cell: CellModel;
  isSelected: boolean;
  onHandleClick: (cell: CellModel) => void;
}

export default ICellProps;
