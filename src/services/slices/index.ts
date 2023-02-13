import { playerSlice } from './player';
import { combineReducers } from 'redux';
import { activeGameSlice } from './active-game';

export const rootReducer = combineReducers({
  game: activeGameSlice.reducer,
  player: playerSlice.reducer,
});
