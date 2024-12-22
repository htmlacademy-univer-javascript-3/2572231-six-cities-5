import { Review as ReviewT } from '@type/offers.ts';

type ReviewItemProps = {
  review: ReviewT;
};

function Rating({ratingValue}: {ratingValue: number}): JSX.Element {
  const percentage = `${Math.round((ratingValue / 5) * 100)}%`;
  return (
    <div className="reviews__rating rating">
      <div className="reviews__stars rating__stars">
        <span style={{width: percentage}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export function Review({ review }: ReviewItemProps): JSX.Element {
  const { user, rating, text, date } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarImgPath}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating ratingValue={rating}/>
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={date}>{date}</time>
      </div>
    </li>
  );
}
