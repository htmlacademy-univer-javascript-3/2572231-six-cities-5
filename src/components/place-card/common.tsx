export type BookMarkButtonProps = {
  isActive: boolean;
  onClick: () => void;
}

export function BookmarkButton({isActive, onClick}: BookMarkButtonProps): JSX.Element {
  return (
    isActive ?
      <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" onClick={onClick}>
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">In bookmarks</span>
      </button>
      :
      <button className="place-card__bookmark-button button" type="button" onClick={onClick}>
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
  );
}

export function Rating({ratingValue}: {ratingValue: number}): JSX.Element {
  const percentage = `${Math.round((ratingValue / 5) * 100)}%`;
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: percentage}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
