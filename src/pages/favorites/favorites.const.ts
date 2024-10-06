import {PlaceCardProps, PlaceType} from '@components/place-card/place-card.props.ts';

export const placeCardsAmsterdamMock: PlaceCardProps[] = [
  {
    type: PlaceType.Apartment,
    isBookmarked: true,
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

export const placeCardsCologneMock: PlaceCardProps[] = [
  {
    type: PlaceType.Apartment,
    isBookmarked: true,
    isPremium: false,
    price: 180,
    rating: 5,
    title: 'White castle',
    imagePath: 'img/apartment-small-04.jpg'
  }
];
