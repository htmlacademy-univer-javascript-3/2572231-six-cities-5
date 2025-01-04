import {LoginForm} from '@pages/login/login-form.tsx';
import {useAppDispatch, useAppSelector} from '@hooks/index.ts';
import {availableCitiesSelector} from '@store/main-page-data/selectors.ts';
import Header from '@components/header/header.tsx';
import {AppRoute} from '@const/app-routes.ts';
import {Link, useNavigate} from 'react-router-dom';
import {authStatusSelector} from '@store/user-data/selectors.ts';
import {Auth} from '@type/auth.ts';
import {useEffect, useMemo} from 'react';
import {setCity} from '@store/main-page-data/main-page-data.ts';

function Login(): JSX.Element {
  const availableCities = useAppSelector(availableCitiesSelector);
  const authStatus = useAppSelector(authStatusSelector);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(()=> {
    if (authStatus === Auth.Auth) {
      navigate(AppRoute.Main);
    }
  }, [navigate, authStatus]);

  const cityToShow = useMemo(() => availableCities[Math.floor(Math.random() * availableCities.length)], [availableCities]);

  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm></LoginForm>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main} onClick={() => {
                dispatch(setCity(cityToShow));
              }}
              >
                <span>{cityToShow.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
