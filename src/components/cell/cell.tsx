import { FC } from 'react';
import ICellProps from './cell.props';

const Cell: FC<ICellProps> = ({ cell }) => {
  return <div className={['cell', cell.color].join(' ')}>{cell.figure?.logo && <img src={cell.figure.logo} />}</div>;
};

export default Cell;
