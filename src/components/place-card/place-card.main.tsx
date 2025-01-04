import {BookmarkButton, Rating} from '@components/place-card/common.tsx';
import {Offer} from '@type/offers.ts';
import {AppRoute} from '@const/app-routes.ts';
import {Link, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '@hooks/index.ts';
import {authStatusSelector} from '@store/user-data/selectors.ts';
import {Auth} from '@type/auth.ts';
import {updateFavoriteStatus} from '@store/api-actions.ts';
import {useState} from 'react';


export type PlaceCardProps = {
  offer: Offer;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function PlaceCard(props: PlaceCardProps): JSX.Element {
  const {onMouseEnter, onMouseLeave} = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(authStatusSelector);

  const [offer, setOffer] = useState(props.offer);

  const handleFavoriteClick = () => {
    if (authStatus !== Auth.Auth) {
      navigate(AppRoute.Login);
      return;
    }
    if (offer === null) {
      return; // unreachable
    }
    dispatch(updateFavoriteStatus({id: offer.id, isFavorite: !offer.isFavorite}));
    setOffer({...offer, isFavorite: !offer.isFavorite});
  };

  return (
    <article className="cities__card place-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isActive={offer.isFavorite} onClick={handleFavoriteClick}/>
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
