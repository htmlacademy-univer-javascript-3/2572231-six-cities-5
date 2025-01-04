import { SortType } from '@pages/main/sort-selection-form';
import {City} from '@type/location.ts';
import {Cities} from '@const/cities.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Namespace} from '@store/namespace.ts';

export type MainPageData = {
    city: City;
    availableCities: City[];
    currentSortType: SortType;
};

const initialState: MainPageData = {
    city: Cities[1],
    availableCities: Cities,
    currentSortType: SortType.Popular,
};

export const mainPageData = createSlice({
    name: Namespace.MainPage,
    initialState,
    reducers: {
        setCity: (state, action: PayloadAction<City>) => {
            state.city = action.payload;
        },
        setSortType: (state, action: PayloadAction<SortType>) => {
            state.currentSortType = action.payload;
        },
    },
});

export const {setCity, setSortType} = mainPageData.actions;
