import {City} from '@type/common.ts';

export const AmsterdamCity: City = {name: 'Amsterdam', location: {latitude: 52.377956, longitude: 4.897070, zoom: 13}};
export const ParisCity: City = {name: 'Paris', location: {latitude: 48.864716, longitude: 2.349014, zoom: 13}};
export const CologneCity: City = {name: 'Cologne', location: {latitude: 0, longitude: 0, zoom: 13}};
export const BrusselsCity: City = {name: 'Brussels', location: {latitude: 0, longitude: 0, zoom: 13}};
export const HamburgCity: City = {name: 'Hamburg', location: {latitude: 0, longitude: 0, zoom: 13}};
export const DusseldorfCity: City = {name: 'Dusseldorf', location: {latitude: 0, longitude: 0, zoom: 13}};

export const Cities = [
  AmsterdamCity, CologneCity, BrusselsCity, HamburgCity, ParisCity, DusseldorfCity
];
