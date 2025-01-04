import {ChangeEvent, FormEvent, useMemo, useState} from 'react';
import {useAppDispatch, useAppSelector} from '@hooks/index.ts';
import {addReview} from '@store/api-actions.ts';
import {isReviewFormActiveSelector} from '@store/offer-data/selectors.ts';

type RatingInputProps = {
  stars: number;
  title: string;
  changeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
};

function RatingInput({stars, title, changeHandler}: RatingInputProps) {
  return (
    <>
      <input className="form__rating-input visually-hidden" onChange={changeHandler} name="rating" value={stars}
             id={`${stars}-stars`} type="radio"/>
      <label id={`${stars}-stars__label`} htmlFor={`${stars}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

type ReviewFormProps = {
  offerId: string;
}

export function ReviewForm({offerId}: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const isActive = useAppSelector(isReviewFormActiveSelector);

  const isSubmitButtonActive = useMemo(() => rating !== 0 && comment.length >= 50, [comment, rating]);

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    evt.preventDefault();
    setComment(evt.target.value);
    setError(null);
  }
  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setRating(+evt.target.value);
    setError(null);
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (comment.length > 300) {
      setError('Comment must be less than 300 characters');
      return;
    }
    if (rating === 0 || comment.length < 50) {
      setError('Rating must be set and comment must be at least 50 characters');
      return;
    }
    dispatch(addReview(
      {
        offerId: offerId,
        comment: comment,
        rating: rating,
      }
    )).unwrap()
      .then(
        () => {
          setComment("");
          setRating(0);
        })
      .catch((err) => {setError(err.message)})
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <fieldset disabled={!isActive}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <RatingInput stars={5} title={'perfect'} changeHandler={handleRatingChange}/>
          <RatingInput stars={4} title={'good'} changeHandler={handleRatingChange}/>
          <RatingInput stars={3} title={'not bad'} changeHandler={handleRatingChange}/>
          <RatingInput stars={2} title={'badly'} changeHandler={handleRatingChange}/>
          <RatingInput stars={1} title={'terribly'} changeHandler={handleRatingChange}/>
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review"
                  placeholder="Tell how was your stay, what you like and what can be improved"
                  onChange={handleCommentChange}
                  value={comment}
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and
            describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit"
                  disabled={!isSubmitButtonActive}>Submit
          </button>
        </div>
        {error && <p className="review-send__error">{error}</p>}
      </fieldset>
    </form>
  );
}
