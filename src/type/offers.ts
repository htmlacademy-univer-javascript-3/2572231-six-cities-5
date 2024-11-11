import {City, Location, User} from '@type/common.ts';

export enum OfferType {
  Apartment = 'Apartment',
  Room = 'Room'
}

export type Offer = {
  id: string;
  type: OfferType;
  isFavorite: boolean;
  isPremium: boolean;
  price: number;
  rating: number;
  title: string;
  imagePath: string;
  city: City;
  location: Location;
};

export type Review = {
  id: string;
  date: Date;
  user: User;
  text: string;
  rating: number;
};
