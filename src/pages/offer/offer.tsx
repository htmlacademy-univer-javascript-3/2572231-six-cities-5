import Header from '@components/header/header.tsx';
import {ReviewForm} from '@components/review/review-form.tsx';
import {ReviewsList} from '@components/review/reviews-list.tsx';
import {Map} from '@components/map/map.offer.tsx';
import {OffersList} from '@components/offers-list/offers-list.near-places.tsx';
import {useAppDispatch, useAppSelector} from '@hooks/index.ts';
import {useNavigate, useParams} from 'react-router-dom';
import NotFound from '@pages/not-found/not-found.tsx';
import {
  isNearbyOffersLoadingSelector,
  isOfferInfoLoadingSelector, isReviewsLoadingSelector,
  nearbyOffersLoadingErrorSelector,
  nearbyOffersSelector,
  offerInfoLoadingErrorSelector,
  offerInfoSelector,
  reviewsLoadingErrorSelector,
  reviewsSelector
} from '@store/offer-data/selectors.ts';
import {useEffect, useMemo} from 'react';
import {getNearbyOffers, getOffer, getReviews, updateFavoriteStatus} from '@store/api-actions.ts';
import Spinner from '@components/spinner/spinner.tsx';
import {Alert} from '@components/alert/alert.tsx';
import OfferGallery from '@pages/offer/offer-gallery.tsx';
import {BookmarkButton} from '@pages/offer/bookmark.tsx';
import {authStatusSelector} from '@store/user-data/selectors.ts';
import {Auth} from '@type/auth.ts';
import {AppRoute} from '@const/app-routes.ts';
import {setOfferInfo, setOfferInfoLoading} from '@store/offer-data/offer-data.ts';

const MAX_NEARBY_OFFERS = 3;

function Offer(): JSX.Element {
  const offerId = useParams<{id: string}>().id;

  if (!offerId) {
    return <NotFound/>;
  }

  useEffect(() => {
    dispatch(getOffer(offerId));
    dispatch(setOfferInfoLoading(true))
    dispatch(getReviews(offerId));
    dispatch(getNearbyOffers(offerId));
  }, [offerId])

  const offer = useAppSelector(offerInfoSelector);
  const isOfferLoading = useAppSelector(isOfferInfoLoadingSelector);
  const offerLoadingError = useAppSelector(offerInfoLoadingErrorSelector);
  const reviews = useAppSelector(reviewsSelector);
  const isReviewsLoading = useAppSelector(isReviewsLoadingSelector);
  const reviewsLoadingError = useAppSelector(reviewsLoadingErrorSelector);
  const nearbyOffers = useAppSelector(nearbyOffersSelector);
  const isNearbyOffersLoading = useAppSelector(isNearbyOffersLoadingSelector);
  const nearbyOffersLoadingError = useAppSelector(nearbyOffersLoadingErrorSelector);

  const authStatus = useAppSelector(authStatusSelector);

  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    if (authStatus !== Auth.Auth) {
      navigate(AppRoute.Login);
      return
    }
    if (offer === null) {
      return // unreachable
    }
    dispatch(updateFavoriteStatus({id: offer.id, isFavorite: !offer.isFavorite}));
    dispatch(setOfferInfo({...offer, isFavorite: !offer.isFavorite}))
  }

  const memoizedNearbyOffers = useMemo(() => nearbyOffers.slice(0, MAX_NEARBY_OFFERS), [nearbyOffers, offer]);

  if (isOfferLoading) {
    return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <Spinner/>
      </main>
    </div>
    )
  }

  if (offerLoadingError) {
    return (
      <div className="page">
        <Header/>
        <main className="page__main page__main--offer">
          <Alert message={offerLoadingError}></Alert>
        </main>
      </div>
    )
  }

  if (offer === null) {
    return (
      <div className="page">
        <Header/>
        <main className="page__main page__main--offer">
          <NotFound/>
        </main>
      </div>
    )
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={offer.images}/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                offer.isPremium && (
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                )
              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <BookmarkButton isActive={offer.isFavorite} onClick={handleFavoriteClick}></BookmarkButton>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `calc(100% / 5 * ${offer.rating})`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{offer.type[0].toUpperCase() + offer.type.slice(1)}</li>
                <li className="offer__feature offer__feature--bedrooms">{offer.bedrooms} Bedrooms</li>
                <li className="offer__feature offer__feature--adults">Max {offer.maxAdults} adults</li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  { offer.goods.map((good) => (
                    <li className="offer__inside-item" key={good}>
                      {good}
                    </li>))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : 'user__avatar-wrapper'}`}>
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                {
                  isReviewsLoading ? <Spinner/> :
                  reviewsLoadingError ? <Alert message={reviewsLoadingError}/> :
                  <ReviewsList reviews={reviews}/>
                }
                {
                  authStatus === Auth.Auth && <ReviewForm/>
                }
              </section>
            </div>
          </div>
          <Map offer={offer} nearbyOffers={memoizedNearbyOffers}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {
              isNearbyOffersLoading ? <Spinner/> :
              nearbyOffersLoadingError ? <Alert message={nearbyOffersLoadingError}/> :
              <OffersList offers={memoizedNearbyOffers}/>
            }
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
