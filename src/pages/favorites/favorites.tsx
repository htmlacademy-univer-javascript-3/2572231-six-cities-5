import Header from '@components/header/header.tsx';
import Footer from '@components/footer/footer.tsx';
import {OffersList} from '@components/offers-list/offers-list.favorites.tsx';
import {useAppDispatch, useAppSelector} from '@hooks/index.ts';
import {
  favoriteOffersLoadingErrorSelector,
  favoritesSelector,
  isFavoriteOffersLoadingSelector
} from '@store/offers-data/selectors.ts';
import {useEffect} from 'react';
import {getFavoriteOffers} from '@store/api-actions.ts';
import Spinner from '@components/spinner/spinner.tsx';
import {Alert} from '@components/alert/alert.tsx';

function Favorites(): JSX.Element {
  const favorites = useAppSelector(favoritesSelector);
  const isFavoriteOffersLoading = useAppSelector(isFavoriteOffersLoadingSelector);
  const favoriteOffersLoadingError = useAppSelector(favoriteOffersLoadingErrorSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavoriteOffers());
  }, [dispatch]);

  const isEmptyPage = favorites.length === 0;

  let content: JSX.Element;
  if (isFavoriteOffersLoading) {
    content = <Spinner/>;
  } else if (isEmptyPage){
    content = (
      <section className="favorites favorites--empty">
        <h1 className="visually-hidden">Favorites (empty)</h1>
        <div className="favorites__status-wrapper">
          <b className="favorites__status">Nothing yet saved.</b>
          <p className="favorites__status-description">Save properties to narrow down search or plan your
          future
          trips.
          </p>
        </div>
      </section>
    );
  } else {
    content = (
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <OffersList offers={favorites}/>
      </section>
    );
  }


  return (
    <div className={`page ${isEmptyPage && 'page--favorites-empty'}`}>
      <Header/>
      <main className={`page__main page__main--favorites ${isEmptyPage && 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {content}
          {favoriteOffersLoadingError && <Alert message={favoriteOffersLoadingError}/>}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;
