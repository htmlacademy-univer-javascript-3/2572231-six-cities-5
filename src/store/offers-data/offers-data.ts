import {Offer} from '@type/offers.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Namespace} from '@store/namespace.ts';
import {getOffers, logout, updateFavoriteStatus} from '@store/api-actions';

export type OffersData = {
  offers: Offer[];
  favoritesCount: number;
  isOffersLoading: boolean;
  offersLoadingError: string | null;
};

const initialState: OffersData = {
  offers: [],
  favoritesCount: 0,
  isOffersLoading: false,
  offersLoadingError: null,
};

export const offersData = createSlice({
  name: Namespace.Offers,
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
    setOffersLoading: (state, action: PayloadAction<boolean>) => {
      state.isOffersLoading = action.payload;
    },
    updateFavorites: (state, action: PayloadAction<{ id: string; isFavorite: boolean }>) => {
      const { id, isFavorite } = action.payload;

      const offerId = state.offers.findIndex((offer) => offer.id === id);
      if (offerId !== -1) {
        state.offers[offerId].isFavorite = isFavorite;
      }

      state.favoritesCount = state.offers.filter((offer) => offer.isFavorite).length;
    },
  },
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
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.offers = [];
      state.favoritesCount = 0;
    });
  },
});

export const {setOffers, setOffersLoading, updateFavorites} = offersData.actions;
