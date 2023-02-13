import type { HTMLProps } from 'react';

export interface IFigureProps extends HTMLProps<SVGSVGElement> {
  color: 'black' | 'white';
}
