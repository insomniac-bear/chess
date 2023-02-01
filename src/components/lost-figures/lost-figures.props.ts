import { HTMLProps } from 'react';
import FigureModel from '../../models/figures/Figure.model';

interface ILostFigures extends HTMLProps<HTMLDivElement> {
  title: string;
  figures: FigureModel[];
}

export default ILostFigures;
