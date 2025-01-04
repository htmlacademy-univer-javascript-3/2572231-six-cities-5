import {useAppDispatch, useAppSelector} from '@hooks/index';
import {City} from '@type/location.ts';
import {setCity} from '@store/main-page-data/main-page-data.ts';
import {memo} from 'react';
import {citySelector} from '@store/main-page-data/selectors.ts';

type CitiesListProps = {
  cities: City[];
};

function CitiesList({ cities }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(citySelector);

  const handleCityChange = (city: City) => {
    dispatch(setCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li
          key={city.name}
          className="locations__item"
          onClick={() => handleCityChange(city)}
        >
          <a className={`locations__item-link tabs__item ${currentCity.name === city.name ? 'tabs__item--active' : ''}`} href="#">
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

const CitiesListMemo = memo(CitiesList);
export default CitiesListMemo;
