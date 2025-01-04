import {City, Location} from '@type/location.ts';
import {User} from '@type/user.ts';

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
  previewImage: string;
  city: City;
  location: Location;
};

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export type OfferExtendedInfo = Offer & {
  description: string;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: User;
  images: string[];
}
