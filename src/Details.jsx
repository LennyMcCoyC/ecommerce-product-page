import { useState } from "react";

export function Details({
  productData,
  itemCount,
  setItemCount,
  addToCartOpen,
}) {
  function itemPlus() {
    setItemCount(itemCount + 1);
  }

  function itemMinus() {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    } else {
      return;
    }
  }

  return (
    <div className="details">
      <h2>SNEAKER COMPANY</h2>
      <h1>{productData[0].name}</h1>
      <p className="description">{productData[0].description}</p>
      <p className="current-price">
        {`$${productData[0].originalPrice * productData[0].discount}.00`}
        <span id="discount">{`${productData[0].discount * 100}%`}</span>
      </p>
      <p className="original-price">
        {" "}
        {`$${productData[0].originalPrice}.00`}{" "}
      </p>
      <div className="checkout">
        <button className="item-count">
          <span className="sign" id="minus" onClick={itemMinus}>
            -{" "}
          </span>{" "}
          <span>{itemCount}</span>
          <span className="sign" id="plus" onClick={itemPlus}>
            +
          </span>
        </button>
        <button className="add-to-cart" onClick={addToCartOpen}>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fillRule="nonzero"
            />
          </svg>
          <span> Add to cart</span>
        </button>
      </div>
    </div>
  );
}
