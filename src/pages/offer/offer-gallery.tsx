import {memo} from 'react';

const MAX_IMAGES = 6;

type OfferGalleryProps = {
  images: string[];
}

function OfferGallery({images}: OfferGalleryProps) {
  const imagesToShow = images.slice(0, MAX_IMAGES);

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {imagesToShow.map((url) =>
          (
            <div className="offer__image-wrapper" key={url}>
              <img className="url" src={url} alt="Photo studio"/>
            </div>
          ))}
      </div>
    </div>
  );
}

const OfferGalleryMemo = memo(OfferGallery);
export default OfferGalleryMemo;
