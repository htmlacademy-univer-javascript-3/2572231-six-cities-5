import {BookMarkButton, Rating} from '@components/place-card/common.tsx';
import {Offer} from '@type/offers.ts';
import {AppRoute} from '@const/app-routes.ts';
import {Link} from 'react-router-dom';


export type PlaceCardProps = {
  offer: Offer;
}

export function PlaceCard(props: PlaceCardProps): JSX.Element {
  const {offer} = props;
  return (
    <article className="near-places__card place-card">
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={offer.imagePath} width="150" height="110" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookMarkButton isActive={offer.isFavorite}/>
        </div>
        <Rating ratingValue={offer.rating}/>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
