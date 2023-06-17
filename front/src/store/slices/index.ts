import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user/user.slice';

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});