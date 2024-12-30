import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer.ts';
import {createAPI} from '../api/api.ts';
import { fetchOffersAction } from '../store/api-actions.ts';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(fetchOffersAction());
