export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type AuthenticatedUser = User & {
  email: string;
  token: string;
}
