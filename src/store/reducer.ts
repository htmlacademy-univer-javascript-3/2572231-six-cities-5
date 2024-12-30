import { createReducer } from '@reduxjs/toolkit';
import { setOffers, setCity, setReviews } from './action';
import { Offer } from '@type/offers.ts';
import { Review } from '@type/offers';
import {City} from '@type/common.ts';
import {ParisCity} from '@mocks/cities.ts';

type StateType = {
  city: City;
  offers: Offer[];
  offersLoading: boolean;
  reviews: Review[];
};

const initialState: StateType = {
  city: ParisCity,
  offers: [],
  offersLoading: false,
  reviews: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setOffers, (state, { payload }) => {
      state.offers = payload;
    })
    .addCase(setReviews, (state, { payload }) => {
      state.reviews = payload;
    });
});
