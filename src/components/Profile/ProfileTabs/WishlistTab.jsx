import React from "react";

const WishlistTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="v-pills-wishlist"
      role="tabpanel"
      aria-labelledby="v-pills-wishlist-tab"
    >
      <h1 className="profile__tab-title">Wishlist</h1>
      <small className="text-muted">6 ITEMS</small>

      <div className="wishlists">
        <div className="wishlist">
          <div className="wishlist__image">
            <img
              src="assets/img/woman-wearing-white-and-yellow-scoop-neck-mini-dress-884979.jpg"
              alt=""
            />
          </div>
          <div className="wishlist__details">
            <div>
              <p className="wishlist__details--name">Hoody for Men</p>
              <small className="wishlist__details--others text-muted">
                Color: Yellow
              </small>
              <p className="wishlist__details--price">$99.90</p>
              <i className="fas fa-trash-alt"></i>
            </div>
            <div>
              <button className="btn btn-dark">
                <i className="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="wishlist">
          <div className="wishlist__image">
            <img
              src="assets/img/woman-wearing-white-and-yellow-scoop-neck-mini-dress-884979.jpg"
              alt=""
            />
          </div>
          <div className="wishlist__details">
            <div>
              <p className="wishlist__details--name">Hoody for Men</p>
              <small className="wishlist__details--others text-muted">
                Color: Yellow
              </small>
              <p className="wishlist__details--price">$99.90</p>
              <i className="fas fa-trash-alt"></i>
            </div>
            <div>
              <button className="btn btn-dark">
                <i className="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistTab;
