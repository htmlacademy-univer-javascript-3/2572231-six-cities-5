import {useEffect, useRef} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import {City} from '@type/common.ts';
import 'leaflet/dist/leaflet.css';
import {Offer} from '@type/offers.ts';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '@const/sources.ts';
import {useMap} from '@components/map/useMap.ts';

type MapProps = {
  city: City;
  offers: Offer[];
  selectedOfferId?: string;
};


const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export function Map({city, offers, selectedOfferId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.lt,
          lng: offer.location.lg
        });
        marker
          .setIcon(
            offer.id === selectedOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOfferId]);

  return (
    <div className="cities__map map" style={{height: '500px'}} ref={mapRef}></div>
  );
}
