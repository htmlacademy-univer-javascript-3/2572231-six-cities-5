import {Review} from '@type/offers.ts';
import {Review as ReviewCmp} from '@components/review/review.tsx';

type ReviewsListProps = {
  reviews: Review[];
};

const MAX_REVIEWS = 10;

export function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const reviewsToShow = reviews.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, MAX_REVIEWS);

  return (
    <ul className="reviews__list">
      {reviewsToShow.map((review) => (
        <ReviewCmp key={review.id} review={review}/>
      ))}
    </ul>
  );
}
