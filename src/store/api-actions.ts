import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '@type/state';
import {Offer, OfferExtendedInfo, Review} from '@type/offers';
import {dropToken, saveToken} from '../api/token.ts';
import {AuthenticatedUser} from '@type/user.ts';


export enum APIRoute {
  Offers = '/offers',
  Favorites = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export const getOffers = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/get',
  async (_arg, {extra: api}) => {
    const response = await api.get<Offer[]>(APIRoute.Offers);
    console.log("request to offers")
    return response.data
  },
);

export const getOffer = createAsyncThunk<OfferExtendedInfo, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/getExtendedInfo',
  async (id, {extra: api}) => {
    const response = await api.get<OfferExtendedInfo>(`${APIRoute.Offers}/${id}`);
    return response.data
  },
);

export const getNearbyOffers = createAsyncThunk<Offer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/getNearby',
  async (id, {extra: api}) => {
    const response = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
    console.log("Nearby offers: ", response.data)
    return response.data
  },
);

export const getReviews = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comments/get',
  async (id, {extra: api}) => {
    const response = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    return response.data
  },
);

export const getFavoriteOffers = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite/get',
  async (_arg, {extra: api}) => {
    const response = await api.get<Offer[]>(APIRoute.Favorites);
    return response.data
  },
);

export const updateFavoriteStatus = createAsyncThunk<OfferExtendedInfo, {id: string, isFavorite: boolean}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite/update',
  async ({id, isFavorite}, {extra: api}) => {
    const response = await api.post<OfferExtendedInfo>(`${APIRoute.Favorites}/${id}/${isFavorite ? '1' : '0'}`);
    return response.data
  },
);

export const login = createAsyncThunk<AuthenticatedUser, {email: string, password: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const response = await api.post(APIRoute.Login, {email, password});
    saveToken(response.data.token);
    return response.data
  },
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const checkAuth = createAsyncThunk<AuthenticatedUser | null, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    try {
      const response = await api.get(APIRoute.Login);
      return response.data;
    } catch (e) {
      return null;
    }
  },
);
