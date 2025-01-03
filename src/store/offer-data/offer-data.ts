import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Namespace } from '@store/namespace.ts';
import {Offer, OfferExtendedInfo, Review} from '@type/offers.ts';
import {getNearbyOffers, getOffer, getReviews} from '@store/api-actions.ts';


export type OfferData = {
    offerInfo: OfferExtendedInfo | null;
    reviews: Review[];
    nearbyOffers: Offer[];
    isOfferInfoLoading: boolean;
    isReviewsLoading: boolean;
    isNearbyOffersLoading: boolean;
    offerInfoLoadingError: string | null;
    reviewsLoadingError: string | null;
    nearbyOffersLoadingError: string | null;
};

const initialState: OfferData = {
    offerInfo: null,
    reviews: [],
    nearbyOffers: [],
    isOfferInfoLoading: false,
    isReviewsLoading: false,
    isNearbyOffersLoading: false,
    offerInfoLoadingError: null,
    reviewsLoadingError: null,
    nearbyOffersLoadingError: null,
};

export const offerData = createSlice({
    name: Namespace.Offer,
    initialState,
    reducers: {
        setOfferInfo: (state, action: PayloadAction<OfferExtendedInfo>) => {
            state.offerInfo = action.payload;
        },
        setReviews: (state, action: PayloadAction<Review[]>) => {
            state.reviews = action.payload;
        },
        setNearbyOffers: (state, action: PayloadAction<Offer[]>) => {
            state.nearbyOffers = action.payload;
        },
        setOfferInfoLoading: (state, action: PayloadAction<boolean>) => {
            state.isOfferInfoLoading = action.payload;
        },
        setReviewsLoading: (state, action: PayloadAction<boolean>) => {
            state.isReviewsLoading = action.payload;
        },
        setNearbyOffersLoading: (state, action: PayloadAction<boolean>) => {
            state.isNearbyOffersLoading = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(getOffer.pending, (state) => {
            state.isOfferInfoLoading = true;
            state.offerInfoLoadingError = null;
        });
        builder.addCase(getOffer.fulfilled, (state, action) => {
            state.offerInfo = action.payload;
            state.isOfferInfoLoading = false;
        });
        builder.addCase(getOffer.rejected, (state, action) => {
            state.offerInfoLoadingError = action.error.message || 'Failed to fetch offer info';
            state.isOfferInfoLoading = false;
        });
        builder.addCase(getReviews.pending, (state) => {
            state.isReviewsLoading = true;
            state.reviewsLoadingError = null;
        });
        builder.addCase(getReviews.fulfilled, (state, action) => {
            state.reviews = action.payload;
            state.isReviewsLoading = false;
        });
        builder.addCase(getReviews.rejected, (state, action) => {
            state.reviewsLoadingError = action.error.message || 'Failed to fetch reviews';
            state.isReviewsLoading = false;
        });
        builder.addCase(getNearbyOffers.pending, (state) => {
            state.isNearbyOffersLoading = true;
            state.nearbyOffersLoadingError = null;
        });
        builder.addCase(getNearbyOffers.fulfilled, (state, action) => {
            state.nearbyOffers = action.payload;
            state.isNearbyOffersLoading = false;
        });
        builder.addCase(getNearbyOffers.rejected, (state, action) => {
            state.nearbyOffersLoadingError = action.error.message || 'Failed to fetch nearby offers';
            state.isNearbyOffersLoading = false;
        });
    },
});

export const {setOfferInfo, setReviews, setNearbyOffers, setOfferInfoLoading, setReviewsLoading, setNearbyOffersLoading} = offerData.actions;
