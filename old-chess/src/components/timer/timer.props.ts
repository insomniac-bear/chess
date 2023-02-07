import { HTMLProps } from 'react';
import PlayerModel from '../../models/Player.model';

export interface ITimerProps extends HTMLProps<HTMLDivElement> {
  currentPlayer: PlayerModel | null;
  restart: () => void;
}
