import {Review} from '@type/offers.ts';


export const reviewMock: Review =
  {
    id: '1',
    date: '2019-04-24',
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 4,
  };
