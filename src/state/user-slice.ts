import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TInitialState, TUser } from './types';

const initialState: TInitialState = {
  isloggedIn: false,
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<TUser>) => {
      const newState = {
        isloggedIn: true,
        user: action.payload,
      };

      return newState;
    },
  },
});

export const { login } = userSlice.actions;
