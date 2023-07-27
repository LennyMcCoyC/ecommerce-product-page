import { useState } from "react";
import ReactImageGallery from "react-image-gallery";
import { NavBar } from "./NavBar";
import { Product } from "./Product";
import { DATA } from "./shared/products.js";
import { images } from "./ImageCarousel";

export default function App() {
  const productData = useState(DATA);
  const [carouselHidden, setCarouselHidden] = useState(true);
  const [itemCount, setItemCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  function handleCartOpen() {
    setCartOpen(!cartOpen);
  }

  function handleCarouselHidden() {
    setCarouselHidden(true);
  }

  function handleCarouselShown() {
    setCarouselHidden(false);
  }

  function addToCartOpen() {
    if (itemCount > 0) {
      setCartOpen(true);
    }
  }

  function handleDelete() {
    setItemCount(0);
  }

  return (
    <>
      <NavBar
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        handleCartOpen={handleCartOpen}
        itemCount={itemCount}
        handleDelete={handleDelete}
      />
      <Product
        productData={productData}
        itemCount={itemCount}
        setItemCount={setItemCount}
        addToCartOpen={addToCartOpen}
        handleCarouselShown={handleCarouselShown}
      />
      <div className={carouselHidden ? "hidden" : "carousel"}>
        <span className="carousel-close" onClick={handleCarouselHidden}></span>
        <ReactImageGallery items={images} />
      </div>
    </>
  );
}
