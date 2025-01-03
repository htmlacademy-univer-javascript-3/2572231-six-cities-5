import {Navigate} from 'react-router-dom';
import {AppRoute} from '@const/app-routes.ts';
import {Auth} from '@type/auth.ts';
import {useAppSelector} from '@hooks/index.ts';

export function PrivateRoute({children}: {children: JSX.Element}) {
  const authStatus = useAppSelector((state) => state.authStatus);
  return authStatus === Auth.Auth ? children : <Navigate to={AppRoute.Login}/>;
}
