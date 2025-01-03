import {State} from '@type/state';
import {Namespace} from '@store/namespace.ts';
import {Offer} from '@type/offers.ts';

export const offersSelector = (state: State): Offer[] => state[Namespace.Offers].offers;
export const offersLoadingSelector = (state: State): boolean => state[Namespace.Offers].isOffersLoading;
export const offersErrorSelector = (state: State): string | null => state[Namespace.Offers].offersLoadingError;
export const favoritesSelector = (state: State): Offer[] => state[Namespace.Offers].favoriteOffers;
export const isFavoriteOffersLoadingSelector = (state: State): boolean => state[Namespace.Offers].isFavoriteOffersLoading;
export const favoriteOffersLoadingErrorSelector = (state: State): string | null => state[Namespace.Offers].favoriteOffersLoadingError;
