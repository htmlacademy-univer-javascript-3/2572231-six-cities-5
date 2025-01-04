import {Offer} from '@type/offers.ts';
import {PlaceCard} from '@components/place-card/place-card.main.tsx';
import {memo} from 'react';

type OffersListProps = {
  offers: Offer[];
  onActiveOfferChange: (offerId: string | null) => void;
};

function OffersList({offers, onActiveOfferChange}: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => onActiveOfferChange(offer.id)}
          onMouseLeave={() => onActiveOfferChange(null)}
        />))}
    </div>
  );
}

const OfferListMemo = memo(OffersList);
export default OfferListMemo;
