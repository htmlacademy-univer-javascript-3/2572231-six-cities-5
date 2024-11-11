import {Review} from '@type/offers.ts';
import {Review as ReviewCmp} from '@components/review/review.tsx';

type ReviewsListProps = {
  reviews: Review[];
};

export function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewCmp key={review.id} review={review}/>
      ))}
    </ul>
  );
}
