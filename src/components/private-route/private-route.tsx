import {Navigate} from 'react-router-dom';
import {AppRoute} from '@const/app-routes.ts';
import {Auth} from '@type/auth.ts';
import {useAppSelector} from '@hooks/index.ts';
import {authStatusSelector} from '@store/user-data/selectors.ts';

export function PrivateRoute({children}: {children: JSX.Element}) {
  const authStatus = useAppSelector(authStatusSelector);
  return authStatus !== Auth.NoAuth ? children : <Navigate to={AppRoute.Login}/>;
}
