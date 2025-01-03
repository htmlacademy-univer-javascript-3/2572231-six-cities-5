import { useAppDispatch } from '@hooks/index';
import {City} from '@type/location.ts';
import {setCity} from '@store/main-page-data/main-page-data.ts';
import {memo} from 'react';

type CitiesListProps = {
  cities: City[];
};

function CitiesList({ cities }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

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
          <a className="locations__item-link tabs__item" href="#">
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default memo(CitiesList)
