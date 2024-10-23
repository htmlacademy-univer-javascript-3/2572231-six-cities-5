import {Navigate} from 'react-router-dom';
import {AppRoute} from '@const/app-routes.ts';
import {AuthorizationStatus} from '@type/authorization-status';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export function PrivateRoute({authorizationStatus, children}: PrivateRouteProps) {
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login}/>;
}
