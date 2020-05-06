import React from "react";

const AddressTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="v-pills-address"
      role="tabpanel"
      aria-labelledby="v-pills-address-tab"
    >
      <h1 className="profile__tab-title">Address</h1>
      <small>
        <i className="fas fa-plus"></i> Add new address
      </small>

      <div className="addresses">
        <div className="address">
          <i className="fas fa-map-marker-alt"></i>
          <div className="address__details">
            <div>
              <p className="address__details--name">John Doe</p>
              <p className="address__details--mobile">09123456789</p>
              <p className="address__details--address">
                25 st., New Jersey, New Jersey, USA
              </p>
            </div>
            <div>
              <a href="#">Edit</a>
            </div>
          </div>
        </div>

        <div className="address">
          <i className="fas fa-map-marker-alt"></i>
          <div className="address__details">
            <div>
              <p className="address__details--name">John Doe</p>
              <p className="address__details--mobile">09123456789</p>
              <p className="address__details--address">
                25 st., New York, New York, USA
              </p>
            </div>
            <div>
              <a href="#">Edit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressTab;
