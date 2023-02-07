import { FC } from 'react';
import ILostFigures from './lost-figures.props';

const LostFigures: FC<ILostFigures> = ({ title, figures }) => {
  return (
    <div className='lost'>
      <h3>{title}</h3>
      {figures.map((figure) => (
        <div key={figure.id}>
          {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo} alt={figure.name} />}
        </div>
      ))}
    </div>
  )
}

export default LostFigures;
