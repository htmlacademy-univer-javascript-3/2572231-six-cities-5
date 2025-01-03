import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from '@pages/main/main.tsx';
import Offer from '@pages/offer/offer.tsx';
import Login from '@pages/login/login.tsx';
import NotFound from '@pages/not-found/not-found.tsx';
import Favorites from '@pages/favorites/favorites.tsx';

import {AppRoute} from '@const/app-routes.ts';
import {PrivateRoute} from '@components/private-route/private-route.tsx';
import {checkAuth, getFavoriteOffers} from '@store/api-actions.ts';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@hooks/index.ts';
import {userSelector} from '@store/user-data/selectors.ts';


function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);

  useEffect(() => {
    dispatch(checkAuth())
  }, []);

  useEffect(() => {
    if (user !== null)
    {
      dispatch(getFavoriteOffers());
    }
  }, [user]);

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
            <PrivateRoute>
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
