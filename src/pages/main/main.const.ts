import {PlaceCardProps, PlaceType} from '@components/place-card/place-card.props.ts';

export const placeCardsMock: PlaceCardProps[] = [
  {
    type: PlaceType.Apartment,
    isBookmarked: false,
    isPremium: true,
    price: 120,
    rating: 4,
    title: 'Beautiful & luxurious apartment at great location',
    imagePath: 'img/apartment-01.jpg'
  },
  {
    type: PlaceType.Room,
    isBookmarked: true,
    isPremium: false,
    price: 80,
    rating: 4,
    title: 'Wood and stone place',
    imagePath: 'img/room.jpg'
  },
  {
    type: PlaceType.Apartment,
    isBookmarked: false,
    isPremium: false,
    price: 132,
    rating: 4,
    title: 'Canal View Prinsengracht',
    imagePath: 'img/apartment-02.jpg'
  },
  {
    type: PlaceType.Apartment,
    isBookmarked: false,
    isPremium: true,
    price: 180,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    imagePath: 'img/apartment-03.jpg'
  },
  {
    type: PlaceType.Room,
    isBookmarked: true,
    isPremium: false,
    price: 80,
    rating: 4,
    title: 'Wood and stone place',
    imagePath: 'img/room.jpg'
  }
];
