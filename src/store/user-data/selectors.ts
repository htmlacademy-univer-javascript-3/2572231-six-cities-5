import {State} from '@type/state';
import {Namespace} from '@store/namespace.ts';
import {AuthenticatedUser} from '@type/user.ts';
import {Auth} from '@type/auth.ts';

export const userSelector = (state: State): AuthenticatedUser | null => state[Namespace.User].user;
export const authStatusSelector = (state: State): Auth => state[Namespace.User].authStatus;
export const loginErrorSelector = (state: State): string | null => state[Namespace.User].loginError;
