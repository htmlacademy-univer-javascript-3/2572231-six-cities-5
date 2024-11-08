import {Offer} from '@type/offers.ts';
import {PlaceCard} from '@components/place-card/place-card.favorites.tsx';
import {useState} from 'react';

type OffersListProps = {
  offers: Offer[];
};

export function OffersList({offers}: OffersListProps): JSX.Element {
  const [, setActiveOfferId] = useState<string | null>(null);
  const cities = [...new Set(offers.map((offer) => offer.city.name))].sort();
  return (
    <ul className="favorites__list">
      {
        cities.map((city) =>
          (
            <li key={city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {
                  offers.filter((offer) => offer.city.name === city).map((offer) => (
                    <PlaceCard
                      key={offer.id}
                      offer={offer}
                      onMouseEnter={() => setActiveOfferId(offer.id)}
                      onMouseLeave={() => setActiveOfferId(null)}
                    />)
                  )
                }
              </div>
            </li>
          )
        )
      }
    </ul>
  );
}
