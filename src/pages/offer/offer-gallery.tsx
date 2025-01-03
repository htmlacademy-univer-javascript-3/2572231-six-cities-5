import {memo} from 'react';

type OfferGalleryProps = {
  images: string[];
}

function OfferGallery({images}: OfferGalleryProps) {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((url) =>
          (
            <div className="offer__image-wrapper" key={url}>
              <img className="url" src={url} alt="Photo studio"/>
            </div>
          ))}
      </div>
    </div>
  );
}

export default memo(OfferGallery);
