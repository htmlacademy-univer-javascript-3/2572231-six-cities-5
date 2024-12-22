import {Review} from '@type/offers.ts';


export const reviews: Review[] = [
  {
    id: '1',
    date: '2019-04-24',
    user: {
      name: 'Max',
      avatarImgPath: 'img/avatar-max.jpg',
    },
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 4,
  },
  {
    id: '2',
    date: '2024-11-11',
    user: {
      name: '𝓐𝓷𝓰𝓮𝓵𝓲𝓷𝓪🦖',
      avatarImgPath: 'img/avatar-angelina.jpg',
    },
    text: 'My life be like ooh-ah (yeah), ooh-ooh (yeah).',
    rating: 5,
  }
];
