import React from "react";
import ProfileTab from "./ProfileTabs/ProfileTab";
import OrderTab from "./ProfileTabs/OrderTab";
import AddressTab from "./ProfileTabs/AddressTab";
import WishlistTab from "./ProfileTabs/WishlistTab";

const Profile = () => {
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
            <div className="tab-content" id="v-pills-tabContent">
              <ProfileTab />
              <OrderTab />
              <AddressTab />
              <WishlistTab />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
