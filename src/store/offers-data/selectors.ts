import {State} from '@type/state';
import {Namespace} from '@store/namespace.ts';
import {Offer} from '@type/offers.ts';

export const offersSelector = (state: State): Offer[] => state[Namespace.Offers].offers;
export const offersLoadingSelector = (state: State): boolean => state[Namespace.Offers].isOffersLoading;
export const favoritesCountSelector = (state: State): number => state[Namespace.Offers].favoritesCount;
