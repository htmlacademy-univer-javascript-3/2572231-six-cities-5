import { createAction } from '@reduxjs/toolkit';
import { Offer, Review } from '@type/offers';
import {City} from '@type/common.ts';

export const setCity = createAction<City>('city/setCity');
export const setOffers = createAction<Offer[]>('offers/setOffers');
export const setReviews = createAction<Review[]>('reviews/setReviews');
