import {ChangeEvent, useState} from 'react';

type RatingInputProps = {
  stars: number;
  title: string;
  changeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
};

function RatingInput({stars, title, changeHandler}: RatingInputProps) {
  return (
    <>
      <input className="form__rating-input visually-hidden" onChange={changeHandler} name="rating" value={stars} id={`${stars}-stars`} type="radio"/>
      <label htmlFor={`${stars}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}


export function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    reviewText: '',
    rating: 0
  });

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    evt.preventDefault();
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <RatingInput stars={5} title={'perfect'} changeHandler={handleFieldChange}/>
        <RatingInput stars={4} title={'good'} changeHandler={handleFieldChange}/>
        <RatingInput stars={3} title={'not bad'} changeHandler={handleFieldChange}/>
        <RatingInput stars={2} title={'badly'} changeHandler={handleFieldChange}/>
        <RatingInput stars={1} title={'terribly'} changeHandler={handleFieldChange}/>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
      </div>
    </form>
  );
}
