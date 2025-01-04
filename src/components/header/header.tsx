import {memo} from 'react';
import {useAppDispatch, useAppSelector} from '@hooks/index.ts';
import {authStatusSelector, userSelector} from '@store/user-data/selectors.ts';
import {logout} from '@store/api-actions.ts';
import {Auth} from '@type/auth.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '@const/app-routes.ts';
import {favoritesSelector} from '@store/offers-data/selectors.ts';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(favoritesSelector);
  const favoritesCount = favorites.length;
  const user = useAppSelector(userSelector);
  const authStatus = useAppSelector(authStatusSelector);

  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authStatus === Auth.Auth && user !== null ? (
                <>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        <img className="user__avatar" src={user.avatarUrl} alt="avatar"/>
                      </div>
                      <span className="header__user-name user__name">{user.email}</span>
                      <span className="header__favorite-count">{favoritesCount}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.Main} onClick={handleSignOut}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </>)
                : (
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

const HeaderMemo = memo(Header);
export default HeaderMemo;
