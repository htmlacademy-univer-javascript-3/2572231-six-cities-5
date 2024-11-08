import Header from '@components/header/header.tsx';
import Footer from '@components/footer/footer.tsx';
import {Offer} from '@type/offers.ts';
import {OffersList} from '@components/offers-list/offers-list.favorites.tsx';

type favoritesProps = {
  offers: Offer[];
}

function Favorites({offers}: favoritesProps): JSX.Element {
  const isEmptyPage = offers.length === 0;

  return (
    <div className={`page ${isEmptyPage && 'page--favorites-empty'}`}>
      <Header/>
      <main className={`page__main page__main--favorites ${isEmptyPage && 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {
            isEmptyPage ?
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future
                    trips.
                  </p>
                </div>
              </section>
              :
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <OffersList offers={offers}/>
              </section>
          }
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;
