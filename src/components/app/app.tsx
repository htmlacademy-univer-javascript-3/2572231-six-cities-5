import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from '@pages/main/main.tsx';
import Offer from '@pages/offer/offer.tsx';
import Login from '@pages/login/login.tsx';
import NotFound from '@pages/not-found/not-found.tsx';
import Favorites from '@pages/favorites/favorites.tsx';

import {AppRoute} from '@const/app-routes.ts';
import {PrivateRoute} from '@components/private-route/private-route.tsx';
import {AuthorizationStatus} from '@type/authorization-status.ts';
import {setOffers, setReviews} from '@store/action.ts';
import {useAppDispatch, useAppSelector} from '@hooks/index.ts';


function App(): JSX.Element {
  const offers = useAppSelector((state) => state.offersList);
  const reviews = useAppSelector((state) => state.reviews);
  const dispatch = useAppDispatch();
  dispatch(setOffers(offers));
  dispatch(setReviews(reviews));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<Offer/>}
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
