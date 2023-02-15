import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  id: number,
  name: string,
}

const initialState: IInitialState = {
  id: 0,
  name: 'Ivan Drago',
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {},
});
