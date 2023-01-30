import { FC } from 'react';
import cn from 'classnames';
import ICellProps from './cell.props';

const Cell: FC<ICellProps> = ({ cell, isSelected, onHandleClick }) => {
  const cellClasses = cn('cell', cell.color, { selected: isSelected });

  return (
    <div
      className={cellClasses}
      onClick={() => onHandleClick(cell)}
      style={{ background: cell.available && cell.figure ? 'salmon' : '' }}
    >
      {!cell.figure && cell.available && <div className="available"></div>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} />}
    </div>
  );
};

export default Cell;
