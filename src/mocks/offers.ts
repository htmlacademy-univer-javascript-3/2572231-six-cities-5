import {Offer, OfferType} from '@type/offers.ts';
import {AmsterdamCity} from '@mocks/cities.ts';

export const offers: Offer[] = [
  {
    id: '1',
    type: OfferType.Apartment,
    isFavorite: false,
    isPremium: true,
    price: 120,
    rating: 4,
    title: 'Beautiful & luxurious apartment at great location',
    imagePath: 'img/apartment-01.jpg',
    city: AmsterdamCity,
    location: {
      lt: 52.3909553943508,
      lg: 4.85309666406198,
    },
  },
  {
    id: '2',
    type: OfferType.Room,
    isFavorite: true,
    isPremium: false,
    price: 80,
    rating: 4,
    title: 'Wood and stone place',
    imagePath: 'img/room.jpg',
    city: AmsterdamCity,
    location: {
      lt: 52.3609553943508,
      lg: 4.85309666406198,
    },
  },
  {
    id: '3',
    type: OfferType.Apartment,
    isFavorite: false,
    isPremium: false,
    price: 132,
    rating: 4,
    title: 'Canal View Prinsengracht',
    imagePath: 'img/apartment-02.jpg',
    city: AmsterdamCity,
    location: {
      lt: 52.3909553943508,
      lg: 4.929309666406198,
    },
  },
  {
    id: '4',
    type: OfferType.Apartment,
    isFavorite: false,
    isPremium: true,
    price: 180,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    imagePath: 'img/apartment-03.jpg',
    city: AmsterdamCity,
    location: {
      lt: 52.3809553943508,
      lg: 4.939309666406198,
    },
  },
];
