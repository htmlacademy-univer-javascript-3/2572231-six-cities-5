import {State} from '@type/state';
import {Namespace} from '@store/namespace.ts';

export const offerInfoSelector = (state: State) => state[Namespace.Offer].offerInfo;
export const reviewsSelector = (state: State) => state[Namespace.Offer].reviews;
export const nearbyOffersSelector = (state: State) => state[Namespace.Offer].nearbyOffers;
export const isOfferInfoLoadingSelector = (state: State) => state[Namespace.Offer].isOfferInfoLoading;
export const isReviewsLoadingSelector = (state: State) => state[Namespace.Offer].isReviewsLoading;
export const isNearbyOffersLoadingSelector = (state: State) => state[Namespace.Offer].isNearbyOffersLoading;
export const offerInfoLoadingErrorSelector = (state: State) => state[Namespace.Offer].offerInfoLoadingError;
export const reviewsLoadingErrorSelector = (state: State) => state[Namespace.Offer].reviewsLoadingError;
export const nearbyOffersLoadingErrorSelector = (state: State) => state[Namespace.Offer].nearbyOffersLoadingError;
export const isReviewFormActiveSelector = (state: State) => state[Namespace.Offer].isReviewFormActive;
