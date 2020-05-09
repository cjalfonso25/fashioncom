import React, { useContext, useEffect, useState } from "react";
import ProfileTab from "./ProfileTabs/ProfileTab";
import OrderTab from "./ProfileTabs/OrderTab";
import AddressTab from "./ProfileTabs/AddressTab";
import WishlistTab from "./ProfileTabs/WishlistTab";
import Loader from "react-loader-spinner";
import { UserContext } from "../context/UserContext";
import { ProductContext } from "../context/ProductContext";

const Profile = () => {
  const { activeUser, setActiveUser } = useContext(UserContext);
  const { cart, setCart } = useContext(ProductContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [activeUser]);

  const handleAddWishlistToCart = (product) => {
    let newObj = { ...product };
    newObj.quantity = 1;
    newObj.subTotal = product.price;
    setCart([...cart, newObj]);
  };

  const handleDeleteWishlist = (productId) => {
    setActiveUser({
      ...activeUser,
      wishlists: activeUser.wishlists.filter(
        (wishlist) => productId !== wishlist._id
      ),
    });
  };

  return (
    <div className="profile-page">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active profile__tab-menu"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Profile
              </a>
              <a
                className="nav-link profile__tab-menu"
                id="v-pills-orders-tab"
                data-toggle="pill"
                href="#v-pills-orders"
                role="tab"
                aria-controls="v-pills-orders"
                aria-selected="true"
              >
                Orders
              </a>
              <a
                className="nav-link profile__tab-menu"
                id="v-pills-address-tab"
                data-toggle="pill"
                href="#v-pills-address"
                role="tab"
                aria-controls="v-pills-address"
                aria-selected="false"
              >
                Address
              </a>
              <a
                className="nav-link profile__tab-menu"
                id="v-pills-wishlist-tab"
                data-toggle="pill"
                href="#v-pills-wishlist"
                role="tab"
                aria-controls="v-pills-wishlist"
                aria-selected="false"
              >
                Wishlist
              </a>
            </div>
          </div>
          <div className="col-12 col-md-9">
            {isLoading ? (
              <Loader type="Puff" color="#00BFFF" height={50} width={50} />
            ) : (
              <div className="tab-content" id="v-pills-tabContent">
                <ProfileTab activeUser={activeUser} />
                <OrderTab orders={activeUser.orders} />
                <AddressTab
                  activeUser={activeUser}
                  addresses={activeUser.addresses}
                />
                <WishlistTab
                  cart={cart}
                  wishlists={activeUser.wishlists}
                  onAddToCart={handleAddWishlistToCart}
                  onDelete={handleDeleteWishlist}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
