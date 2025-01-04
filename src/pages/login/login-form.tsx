import {ChangeEvent, FormEvent, useState} from 'react';
import {useAppDispatch} from '@hooks/index.ts';
import {getOffers, login} from '@store/api-actions.ts';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '@const/app-routes.ts';

export function LoginForm(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const changePassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    setLoginError(null);
    evt.preventDefault();
    if (/[a-z]/.test(password) && /[0-9]/.test(password)) {
      dispatch(login({
        email: email,
        password: password,
      })).unwrap()
        .then(
          () => {
            dispatch(getOffers());
            navigate(AppRoute.Main);
          },
        )
        .catch((err: {message: string}) => {
          setLoginError(err.message);
        }
        );
    } else {
      setLoginError('Password must contain at least one letter and one number');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input" type="email" name="email" placeholder="Email" onChange={changeEmail} required/>
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input className="login__input form__input" type="password" name="password" placeholder="Password" onChange={changePassword} required/>
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
      {loginError && <div className="login__error">{loginError}</div>}
    </form>
  );
}
