import {Offer} from '@type/offers.ts';
import {PlaceCard} from '@components/place-card/place-card.near-places.tsx';

type OffersListProps = {
  offers: Offer[];
};

export function OffersList({offers}: OffersListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
        />))}
    </div>
  );
}
