import { Details } from "./Details";
import { Gallery } from "./Gallery";

export function Product({
  productData,
  itemCount,
  setItemCount,
  shoppingCart,
  setShoppingCart,
  addToCartOpen,
  handleCarouselShown,
}) {
  return (
    <div className="body-wrapper">
      <Gallery
        productData={productData}
        handleCarouselShown={handleCarouselShown}
      />

      <Details
        productData={productData}
        itemCount={itemCount}
        setItemCount={setItemCount}
        shoppingCart={shoppingCart}
        addToCartOpen={addToCartOpen}
        setShoppingCart={setShoppingCart}
      />
    </div>
  );
}
