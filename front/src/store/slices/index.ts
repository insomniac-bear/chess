import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user/user.slice';
import { authApi } from './api/auth.api';

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
});