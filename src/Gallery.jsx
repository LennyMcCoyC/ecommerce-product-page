import { useState } from "react";

export function Gallery({ productData, handleCarouselShown }) {
  const [thumbnailOneClicked, setThumbnailOneClicked] = useState(false);
  const [thumbnailTwoClicked, setThumbnailTwoClicked] = useState(false);
  const [thumbnailThreeClicked, setThumbnailThreeClicked] = useState(false);
  const [thumbnailFourClicked, setThumbnailFourClicked] = useState(false);

  function handleThumbnailOneClicked() {
    setThumbnailOneClicked(true);
    setThumbnailTwoClicked(false);
    setThumbnailThreeClicked(false);
    setThumbnailFourClicked(false);
  }

  function handleThumbnailTwoClicked() {
    setThumbnailTwoClicked(true);
    setThumbnailOneClicked(false);
    setThumbnailThreeClicked(false);
    setThumbnailFourClicked(false);
  }
  function handleThumbnailThreeClicked() {
    setThumbnailThreeClicked(true);
    setThumbnailOneClicked(false);
    setThumbnailTwoClicked(false);
    setThumbnailFourClicked(false);
  }
  function handleThumbnailFourClicked() {
    setThumbnailFourClicked(true);
    setThumbnailOneClicked(false);
    setThumbnailTwoClicked(false);
    setThumbnailThreeClicked(false);
  }

  return (
    <div className="gallery">
      <img
        className="product-image"
        src={
          thumbnailOneClicked
            ? `${productData[0].images[0].src}.jpg`
            : thumbnailTwoClicked
            ? `${productData[0].images[1].src}.jpg`
            : thumbnailThreeClicked
            ? `${productData[0].images[2].src}.jpg`
            : thumbnailFourClicked
            ? `${productData[0].images[3].src}.jpg`
            : `${productData[0].images[0].src}.jpg`
        }
        alt="product image one"
        onDoubleClick={handleCarouselShown}
      />
      <div className="product-image-thumbnail">
        <div
          // className="image-thumbnail thumbnail-selected"
          className={
            thumbnailTwoClicked || thumbnailThreeClicked || thumbnailFourClicked
              ? "image-thumbnail"
              : "image-thumbnail thumbnail-selected"
          }
        >
          <img
            src={`${productData[0].images[0].src}-thumbnail.jpg`}
            alt="product image one thumbnail"
            onClick={handleThumbnailOneClicked}
          />
        </div>
        <div
          className={
            thumbnailTwoClicked
              ? "image-thumbnail thumbnail-selected"
              : "image-thumbnail "
          }
        >
          <img
            src={`${productData[0].images[1].src}-thumbnail.jpg`}
            alt="product image two thumbnail"
            onClick={handleThumbnailTwoClicked}
          />
        </div>
        <div
          className={
            thumbnailThreeClicked
              ? "image-thumbnail thumbnail-selected"
              : "image-thumbnail "
          }
        >
          <img
            src={`${productData[0].images[2].src}-thumbnail.jpg`}
            alt="product image three thumbnail"
            onClick={handleThumbnailThreeClicked}
          />
        </div>
        <div
          className={
            thumbnailFourClicked
              ? "image-thumbnail thumbnail-selected"
              : "image-thumbnail "
          }
        >
          <img
            src={`${productData[0].images[3].src}-thumbnail.jpg`}
            alt="product image four thumbnail"
            onClick={handleThumbnailFourClicked}
          />
        </div>
      </div>
    </div>
  );
}
