import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { IUser, IUserResponse } from '../../types/user.type';

const initialState: IUser = {
  id: null,
  email: null,
  name: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser (state, action: PayloadAction<IUserResponse>) {
      const { id, email, name } = action.payload;
      state = { id, email, name };
    },

    clearUser (state) {
      state = initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
