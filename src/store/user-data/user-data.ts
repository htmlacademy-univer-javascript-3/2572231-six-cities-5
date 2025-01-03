import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Namespace} from '@store/namespace.ts';
import { AuthenticatedUser } from '@type/user';
import {Auth} from '@type/auth.ts';
import {checkAuth, login, logout} from '@store/api-actions.ts';

export type UserData = {
  authStatus: Auth;
  user: AuthenticatedUser | null;
  loginError: string | null;
};

const initialState: UserData = {
  authStatus: Auth.Unknown,
  user: null,
  loginError: null,
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
    setLoginError: (state, action: PayloadAction<string | null>) => {
      state.loginError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loginError = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.authStatus = Auth.NoAuth;
      state.user = null;
      state.loginError = action.error.message || "Login failed";
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
  },
});

export const {setAuthStatus, setUser, setLoginError} = userData.actions;
