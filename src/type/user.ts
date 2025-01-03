export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type AuthData = {
  email: string;
  password: string;
}

export type AuthenticatedUser = User & {
  email: string;
  token: string;
}
