import Header from '@components/header/header.tsx';
import {Offer} from '@type/offers.ts';
import {OffersList} from '@components/offers-list/offers-list.main.tsx';
import {Map} from '@components/map/map.tsx';
import {useAppSelector} from '@hooks/index.ts';
import {CitiesList} from '@components/cities-list/cities-list.tsx';
import {Cities} from '@mocks/cities.ts';
import {useEffect, useState} from 'react';
import SortForm, {SortType} from '@pages/main/sort-selection-form.tsx';

function Main(): JSX.Element {
  const offers = useAppSelector((state) => state.offersList);
  const city = useAppSelector((state) => state.city);

  const [visibleOffers, setVisibleOffers] = useState<Offer[]>(offers);
  const [sortedOffers, setSortedOffers] = useState<Offer[]>(visibleOffers);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const activeOffer = offers.find((offer) => offer.id === activeOfferId);
  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city.name);
    setVisibleOffers(filteredOffers);
  }, [city, offers]);

  const handleSortChange = (selectedSort: string) => {
    let sortedOffers = [...visibleOffers];
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
        sortedOffers = [...visibleOffers];
        break;
    }
    setSortedOffers(sortedOffers);
  };

  const isEmptyPage = offers.length === 0;
  return (
    <div className={`page page--gray page--main ${isEmptyPage && 'page__main--index-empty'}`}>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
           <CitiesList cities={Cities}/>
          </section>
        </div>
        <div className="cities">
          {
            isEmptyPage ?
              <div className="cities__places-container cities__places-container--empty container">
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in
                      Dusseldorf
                    </p>
                  </div>
                </section>
                <div className="cities__right-section"></div>
              </div>
              :
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{`${sortedOffers.length} places to stay in ${city}`}</b>
                  <SortForm onSortChange={handleSortChange} />
                  <OffersList offers={sortedOffers} onActiveOfferChange={setActiveOfferId}/>
                </section>
                <div className="cities__right-section">
                  <Map
                    city={city}
                    offers={sortedOffers}
                    selectedOfferId={activeOffer?.id}
                  />
                </div>
              </div>
          }
        </div>
      </main>
    </div>
  );
}

export default Main;
