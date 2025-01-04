export type BookMarkButtonProps = {
  isActive: boolean;
  onClick: () => void;
}

export function BookmarkButton({isActive, onClick}: BookMarkButtonProps): JSX.Element {
  return (
    isActive ?
      <button className="offer__bookmark-button offer__bookmark-button--active button" type="button" onClick={onClick}>
        <svg className="offer__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">In bookmarks</span>
      </button>
      :
      <button className="offer__bookmark-button button" type="button" onClick={onClick}>
        <svg className="offer__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
  );
}
