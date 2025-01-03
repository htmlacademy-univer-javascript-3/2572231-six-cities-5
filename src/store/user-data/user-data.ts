import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Namespace} from '@store/namespace.ts';
import { AuthenticatedUser } from '@type/user';
import {Auth} from '@type/auth.ts';

export type UserData = {
  authStatus: Auth;
  user: AuthenticatedUser | null;
};

const initialState: UserData = {
  authStatus: Auth.Unknown,
  user: null,
};

export const userData = createSlice({
  name: Namespace.User,
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<Auth>) => {
      state.authStatus = action.payload;
    },
    setUser: (state, action: PayloadAction<AuthenticatedUser>) => {
      state.user = action.payload;
    },
  },
});

export const {setAuthStatus, setUser} = userData.actions;
