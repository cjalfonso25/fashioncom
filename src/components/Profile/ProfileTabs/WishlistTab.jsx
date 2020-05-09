import React from "react";

const WishlistTab = ({ wishlists, cart, onAddToCart, onDelete }) => {
  return (
    <div
      className="tab-pane fade"
      id="v-pills-wishlist"
      role="tabpanel"
      aria-labelledby="v-pills-wishlist-tab"
    >
      <h1 className="profile__tab-title">Wishlist</h1>
      <small className="text-muted">
        {wishlists.length > 1
          ? `${wishlists.length} ITEMS`
          : `${wishlists.length} ITEM`}
      </small>

      <div className="wishlists">
        {wishlists.length > 0 ? (
          wishlists.map((wishlist) => (
            <div key={wishlist._id} className="wishlist">
              <div className="wishlist__image">
                <img src={wishlist.image} alt="" />
              </div>
              <div className="wishlist__details">
                <div>
                  <p className="wishlist__details--name">{wishlist.name}</p>
                  <small className="wishlist__details--others text-muted">
                    Color: {wishlist.color}
                  </small>
                  <p className="wishlist__details--price">${wishlist.price}</p>
                  <i
                    className="fas fa-trash-alt"
                    onClick={() => onDelete(wishlist._id)}
                  ></i>
                </div>
                <div>
                  <button
                    className="btn btn-dark"
                    disabled={
                      cart.filter((p) => p._id === wishlist._id).length <= 0
                        ? false
                        : "disabled"
                    }
                    onClick={() => onAddToCart(wishlist)}
                  >
                    <i className="fas fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <small className="text-muted p-3">
            You have 0 items in your wishlist
          </small>
        )}

        {/* 
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
        </div> */}
      </div>
    </div>
  );
};

export default WishlistTab;
