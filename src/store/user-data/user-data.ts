import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Namespace} from '@store/namespace.ts';
import { AuthenticatedUser } from '@type/user';
import {Auth} from '@type/auth.ts';
import {checkAuth, login, logout} from '@store/api-actions.ts';

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
  extraReducers: (builder) => {
    builder.addCase(login.rejected, (state) => {
      state.authStatus = Auth.NoAuth;
      state.user = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.authStatus = Auth.Auth;
      state.user = action.payload;
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      if (action.payload === null) {
        state.authStatus = Auth.NoAuth;
        return
      }
      state.authStatus = Auth.Auth;
      state.user = action.payload;
    });
    builder.addCase(checkAuth.rejected, (state) => {
      state.authStatus = Auth.NoAuth;
      state.user = null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.authStatus = Auth.NoAuth;
      state.user = null;
    });
    builder.addCase(logout.rejected, (state) => {
      state.authStatus = Auth.NoAuth;
      state.user = null;
    });
  },
});

export const {setAuthStatus, setUser} = userData.actions;
