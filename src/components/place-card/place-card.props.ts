export enum PlaceType {
  Apartment = 'Apartment',
  Room = 'Room'
}

export type PlaceCardProps = {
  type: PlaceType;
  isBookmarked: boolean;
  isPremium: boolean;
  price: number;
  rating: number;
  title: string;
  imagePath: string;
};
