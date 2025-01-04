import {AppRoute} from '@const/app-routes.ts';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 Not found</h1>
      <Link to={AppRoute.Main}>
        <button className="not-found__button button">
          Back to main page
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
