import {Offer} from '@type/offers.ts';
import {createSlice} from '@reduxjs/toolkit';
import {Namespace} from '@store/namespace.ts';
import {getFavoriteOffers, getOffers, logout, updateFavoriteStatus} from '@store/api-actions';

export type OffersData = {
  offers: Offer[];
  isOffersLoading: boolean;
  offersLoadingError: string | null;
  favoriteOffers: Offer[];
  isFavoriteOffersLoading: boolean;
  favoriteOffersLoadingError: string | null;
};

const initialState: OffersData = {
  offers: [],
  isOffersLoading: false,
  offersLoadingError: null,
  favoriteOffers: [],
  isFavoriteOffersLoading: false,
  favoriteOffersLoadingError: null,
};

export const offersData = createSlice({
  name: Namespace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getOffers.pending, (state) => {
      state.isOffersLoading = true;
      state.offersLoadingError = null;
    });
    builder.addCase(getOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    });
    builder.addCase(getOffers.rejected, (state, action) => {
      state.offersLoadingError = action.error.message || 'Failed to fetch offers';
      state.isOffersLoading = false;
    });
    builder.addCase(updateFavoriteStatus.fulfilled, (state, action) => {
      state.offers = state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer);
      if (action.payload.isFavorite) {
        state.favoriteOffers.push(action.payload);
      } else {
        state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload.id);
      }
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.offers = [];
      state.favoriteOffers = [];
    });
    builder.addCase(getFavoriteOffers.pending, (state) => {
      state.isFavoriteOffersLoading = true;
      state.favoriteOffersLoadingError = null;
    });
    builder.addCase(getFavoriteOffers.fulfilled, (state, action) => {
      state.favoriteOffers = action.payload;
      state.isFavoriteOffersLoading = false;
    });
  },
});

export const {} = offersData.actions;
