import {Offer} from '@type/offers.ts';
import {PlaceCard} from '@components/place-card/place-card.main.tsx';
import {useState} from 'react';

type OffersListProps = {
  offers: Offer[];
};

export function OffersList({offers}: OffersListProps): JSX.Element {
  const [, setActiveOfferId] = useState<string | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => setActiveOfferId(offer.id)}
          onMouseLeave={() => setActiveOfferId(null)}
        />))}
    </div>
  );
}
