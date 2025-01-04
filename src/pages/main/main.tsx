import Header from '@components/header/header.tsx';
import OffersList from '@components/offers-list/offers-list.main.tsx';
import Map from '@components/map/map.tsx';
import {useAppDispatch, useAppSelector} from '@hooks/index.ts';
import CitiesList from '@components/cities-list/cities-list.tsx';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {SortType} from '@type/main-page.ts';
import SortForm from '@pages/main/sort-selection-form.tsx';
import {getOffers} from '@store/api-actions.ts';
import {availableCitiesSelector, citySelector, currentSortTypeSelector} from '@store/main-page-data/selectors.ts';
import {offersLoadingErrorSelector, offersLoadingSelector, offersSelector} from '@store/offers-data/selectors.ts';
import Spinner from '@components/spinner/spinner.tsx';
import {userSelector} from '@store/user-data/selectors.ts';
import {Alert} from '@components/alert/alert.tsx';
import {setSortType} from '@store/main-page-data/main-page-data.ts';


function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  const user = useAppSelector(userSelector);

  const offers = useAppSelector(offersSelector);
  const availableCities = useAppSelector(availableCitiesSelector);
  const city = useAppSelector(citySelector);
  const selectedSort = useAppSelector(currentSortTypeSelector);

  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch, user, city]);

  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const onActiveOfferChange = useCallback((offerId: string | null) => setActiveOfferId(offerId), []);
  const visibleOffers = useMemo(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city.name);
    let sortedOffers = [...filteredOffers];
    switch (selectedSort) {
      case SortType.PriceASC:
        sortedOffers.sort((a, b) => a.price - b.price);
        break;
      case SortType.PriceDESC:
        sortedOffers.sort((a, b) => b.price - a.price);
        break;
      case SortType.TopRated:
        sortedOffers.sort((a, b) => b.rating - a.rating);
        break;
      case SortType.Popular:
        sortedOffers = [...filteredOffers];
        break;
    }

    return sortedOffers;
  }, [city, offers, selectedSort]);

  const handleSortChange = (sortType: SortType) => {
    dispatch(setSortType(sortType));
  };


  const isOffersLoading = useAppSelector(offersLoadingSelector);
  const offersLoadingError = useAppSelector(offersLoadingErrorSelector);
  const isEmptyPage = visibleOffers.length === 0;

  let content: JSX.Element;

  if (isOffersLoading) {
    content = <Spinner/>;
  } else if (offersLoadingError) {
    content = <Alert message={offersLoadingError}/>;
  } else if (isEmptyPage) {
    content = (
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">
              {`We could not find any property available at the moment in ${city.name}`}
            </p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    );
  } else {
    content = (
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`${visibleOffers.length} places to stay in ${city.name}`}</b>
          <SortForm onSortChange={handleSortChange} defaultSortType={selectedSort}/>
          <OffersList offers={visibleOffers} onActiveOfferChange={onActiveOfferChange}/>
        </section>
        <div className="cities__right-section">
          <Map city={city} offers={visibleOffers} selectedOfferId={activeOfferId}/>
        </div>
      </div>
    );
  }


  return (
    <div className={`page page--gray page--main ${isEmptyPage && 'page__main--index-empty'}`}>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={availableCities}/>
          </section>
        </div>
        <div className="cities">
          {content}
        </div>
      </main>
    </div>
  );
}

export default Main;
