import {Offer} from '@type/offers.ts';
import {PlaceCard} from '@components/place-card/place-card.main.tsx';
import {useEffect, useState} from 'react';

type OffersListProps = {
  offers: Offer[];
  onActiveOfferChange: (offerId: string | null) => void;
};

export function OffersList({offers, onActiveOfferChange}: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  useEffect(() => {
    onActiveOfferChange(activeOfferId);
  }, [activeOfferId, onActiveOfferChange]);

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
