import { createReducer } from '@reduxjs/toolkit';
import { setOffers, setCity, setReviews } from './action';
import { Offer } from '@type/offers.ts';
import {offers} from '@mocks/offers';
import { Review } from '@type/offers';
import { reviews } from '@mocks/reviews';
import {City} from '@type/common.ts';
import {ParisCity} from '@mocks/cities.ts';

type StateType = {
  city: City;
  offersList: Offer[];
  reviews: Review[];
};

const initialState: StateType = {
  city: ParisCity,
  offersList: [],
  reviews: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setOffers, (state) => {
      state.offersList = offers;
    })
    .addCase(setReviews, (state) => {
      state.reviews = reviews;
    });
});
