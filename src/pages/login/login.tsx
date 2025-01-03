import {LoginForm} from '@pages/login/login-form.tsx';
import {useAppSelector} from '@hooks/index.ts';
import {citySelector} from '@store/main-page-data/selectors.ts';
import Header from '@components/header/header.tsx';
import {AppRoute} from '@const/app-routes.ts';
import {Link, useNavigate} from 'react-router-dom';
import {authStatusSelector} from '@store/user-data/selectors.ts';
import {Auth} from '@type/auth.ts';
import {useEffect} from 'react';

function Login(): JSX.Element {
  const currentCity = useAppSelector(citySelector);
  const authStatus = useAppSelector(authStatusSelector);

  const navigate = useNavigate();

  useEffect(()=> {
    if (authStatus === Auth.Auth) {
      navigate(AppRoute.Main);
    }
  }, [authStatus]);

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
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>{currentCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
