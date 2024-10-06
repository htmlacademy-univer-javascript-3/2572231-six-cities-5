import Header from '@components/header/header.tsx';
import {placeCardsAmsterdamMock, placeCardsCologneMock} from './favorites.const.ts';
import PlaceCardCities from '@components/place-card/place-card.favorites.tsx';
import Footer from '@components/footer/footer.tsx';
import {PlaceCardProps} from '@components/place-card/place-card.props.ts';

type Location = {
  name: string;
  places: PlaceCardProps[];
}

function Favorites(): JSX.Element {
  const places: Location[] = [
    {name: 'Amsterdam', places: placeCardsAmsterdamMock},
    {name: 'Cologne', places: placeCardsCologneMock},
  ];

  const isEmptyPage = places.length === 0;
  return (
    <div className={`page ${isEmptyPage && 'page--favorites-empty'}`}>
      <Header />
      <main className={`page__main page__main--favorites ${isEmptyPage && 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {
            isEmptyPage ?
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </section>
              :
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {
                    places.map((loc) =>
                      (
                        <li key={loc.name} className="favorites__locations-items">
                          <div className="favorites__locations locations locations--current">
                            <div className="locations__item">
                              <a className="locations__item-link" href="#">
                                <span>Amsterdam</span>
                              </a>
                            </div>
                          </div>
                          <div className="favorites__places">
                            {
                              loc.places.map((pc) => PlaceCardCities(pc))
                            }
                          </div>
                        </li>
                      )
                    )
                  }
                </ul>
              </section>
          }
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;
