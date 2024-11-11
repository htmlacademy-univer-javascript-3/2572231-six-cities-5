export type Location = {
  lt: number;
  lg: number;
};

export type City = {
  name: string;
  location: Location;
};

export type User = {
  name: string;
  avatarImgPath: string;
}
