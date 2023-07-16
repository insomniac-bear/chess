import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { IUser } from '../../types/user.type';

const initialState: IUser = {
  id: null,
  email: null,
  name: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser (state, action: PayloadAction<IUser>) {
      const { id, email, name } = action.payload;
      return { id, email, name };
    },

    clearUser (state) {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
