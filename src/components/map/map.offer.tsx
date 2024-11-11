import {useEffect, useRef} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offer} from '@type/offers.ts';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '@const/sources.ts';
import {useMap} from '@components/map/useMap.ts';

type MapProps = {
  offer: Offer;
  nearbyOffers: Offer[];
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

export function Map({offer, nearbyOffers}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offer.city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      nearbyOffers.forEach((offer_) => {
        const marker = new Marker({
          lat: offer_.location.lt,
          lng: offer_.location.lg
        });
        marker.setIcon(defaultCustomIcon).addTo(map);
      });
      const marker = new Marker({
        lat: offer.location.lt,
        lng: offer.location.lg
      });
      marker.setIcon(currentCustomIcon).addTo(map);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offer, nearbyOffers]);

  return (
    <div className="offer__map map" style={{height: '500px'}} ref={mapRef}></div>
  );
}
