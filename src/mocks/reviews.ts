import {Review} from '@type/offers.ts';


export const reviews: Review[] = [
  {
    id: '1',
    date: '2019-04-24',
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 4,
  },
  {
    id: '2',
    date: '2024-11-11',
    user: {
      name: '𝓐𝓷𝓰𝓮𝓵𝓲𝓷𝓪🦖',
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    comment: 'My life be like ooh-ah (yeah), ooh-ooh (yeah).',
    rating: 5,
  }
];
