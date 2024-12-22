import {useState} from 'react';

export enum SortType {
  Popular = 'Popular',
  PriceASC = 'Price: low to high',
  PriceDESC = 'Price: high to low',
  TopRated = 'Top rated first',
}

const SortTypes: SortType[] = Object.values(SortType)

type SortFormProps = {
  onSortChange: (sortingType: string) => void;
}

function SortForm({onSortChange}: SortFormProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  const [selectedSort, setSelectedSort] = useState(SortType.Popular);

  const handleSortSelection = (option: SortType) => {
    setSelectedSort(option);
    setIsActive(false);
    onSortChange(option);
  };

  return (
    <form className="places__sorting">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsActive(!isActive)}
      >
        {selectedSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isActive && (
        <ul className="places__options places__options--custom places__options--opened">
          {SortTypes.map((option) => (
            <li
              key={option}
              className={`places__option ${option === selectedSort ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => handleSortSelection(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SortForm;
