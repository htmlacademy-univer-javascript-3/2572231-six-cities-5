import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from '@pages/main/main.tsx';
import Offer from '@pages/offer/offer.tsx';
import Login from '@pages/login/login.tsx';
import NotFound from '@pages/not-found/not-found.tsx';
import Favorites from '@pages/favorites/favorites.tsx';

import {AppRoute} from '@const/app-routes.ts';
import {PrivateRoute} from '@components/private-route/private-route.tsx';
import {AuthorizationStatus} from '@type/authorization-status.ts';
import {Offer as Offer_, Review} from '@type/offers.ts';

type AppProps = {
  offers: Offer_[];
  offerReviews: Review[];
}

function App({offers, offerReviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offers={offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<Offer reviews={offerReviews} offer={offers[0]} nearbyOffers={offers.slice(1)}/>}
        />
        <Route
          path="*"
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
