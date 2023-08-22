import { useState } from "react";

export function NavBar({ cartOpen, handleCartOpen, itemCount, handleDelete }) {
  return (
    <nav>
      <div className="nav-left">
        <img src="/assets/logo.svg" alt="logo" />
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="nav-right" data-content={itemCount}>
        <svg
          width="22"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          id="nav-cart"
          onClick={handleCartOpen}
        >
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fillRule="nonzero"
          />
        </svg>
        <img
          className="nav-avatar"
          src="/assets/image-avatar.png"
          alt="avatar image"
        />
      </div>
      <div className={cartOpen ? "cart-dropdown" : "hidden"}>
        <p className="cart-title">Cart</p>

        <div className="cart-content">
          {!itemCount > 0 ? (
            <p className="cart-empty">Your cart is empty.</p>
          ) : (
            <>
              <div className="cart-item">
                <img
                  className="cart-item-left"
                  src="assets/image-product-1-thumbnail.jpg"
                  alt="product thumbnail one"
                />
                <div className="cart-item-middle">
                  <p className="cart-item-name">
                    Fall Limited Edition Sneakers
                  </p>
                  <p className="cart-item-price">
                    $125.00
                    <span id="cart-count"> x {itemCount}</span>
                    <span id="cart-sum"> ${125 * itemCount}.00</span>
                  </p>
                </div>
                <img
                  id="delete-icon"
                  className="cart-item-right"
                  src="/assets/icon-delete.svg"
                  alt="delete icon"
                  onClick={handleDelete}
                />
              </div>
              <button id="cart-checkout">Checkout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
