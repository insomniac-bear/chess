import type { FC } from 'react';
import type { IFigureProps } from './figure.types';
import { Bishop } from './bishop';
import { King } from './king';
import { Knight } from './knight';
import { Pawn } from './pawn';
import { Queen } from './queen';
import { Rook } from './rook';

export interface IFigures {
  Bishop: FC<IFigureProps>;
  King: FC<IFigureProps>;
  Knight: FC<IFigureProps>;
  Queen: FC<IFigureProps>;
  Rook: FC<IFigureProps>;
  Pawn: FC<IFigureProps>;
}

export { Bishop, King, Knight, Pawn, Queen, Rook };
