import {City} from '@type/common.ts';

export const AmsterdamCity: City = {name: 'Amsterdam', location: {lt: 52.377956, lg: 4.897070}};
export const ParisCity: City = {name: 'Paris', location: {lt: 48.864716, lg: 2.349014}};
export const CologneCity: City = {name: 'Cologne', location: {lt: 0, lg: 0}};
export const BrusselsCity: City = {name: 'Brussels', location: {lt: 0, lg: 0}};
export const HamburgCity: City = {name: 'Hamburg', location: {lt: 0, lg: 0}};
export const DusseldorfCity: City = {name: 'Dusseldorf', location: {lt: 0, lg: 0}};

export const Cities = [
  AmsterdamCity, CologneCity, BrusselsCity, HamburgCity, ParisCity, DusseldorfCity
];
