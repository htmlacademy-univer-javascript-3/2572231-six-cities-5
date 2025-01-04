import {combineReducers} from '@reduxjs/toolkit';
import {userData} from '@store/user-data/user-data.ts';
import {offersData} from '@store/offers-data/offers-data.ts';
import {offerData} from '@store/offer-data/offer-data.ts';
import {mainPageData} from '@store/main-page-data/main-page-data.ts';
import {Namespace} from '@store/namespace.ts';

export const reducer = combineReducers({
  [Namespace.User]: userData.reducer,
  [Namespace.Offers]: offersData.reducer,
  [Namespace.MainPage]: mainPageData.reducer,
  [Namespace.Offer]: offerData.reducer,
});
