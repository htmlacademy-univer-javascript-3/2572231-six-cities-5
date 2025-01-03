import {State} from '@type/state';
import {Namespace} from '@store/namespace.ts';
import {City} from '@type/location.ts';
import {SortType} from '@pages/main/sort-selection-form';

export const citySelector = (state: State): City => state[Namespace.MainPage].city;
export const availableCitiesSelector = (state: State): City[] => state[Namespace.MainPage].availableCities;
export const currentSortTypeSelector = (state: State): SortType => state[Namespace.MainPage].currentSortType;
