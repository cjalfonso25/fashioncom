import React from "react";

const AddressTab = ({ activeUser, addresses }) => {
  return (
    <div
      className="tab-pane fade"
      id="v-pills-address"
      role="tabpanel"
      aria-labelledby="v-pills-address-tab"
    >
      <h1 className="profile__tab-title">Address</h1>
      <small className="btn btn-sm btn-link">
        <i className="fas fa-plus"></i> Add new address
      </small>

      <div className="addresses">
        {addresses.length > 0 ? (
          addresses.map((address) => (
            <div key={address._id} className="address">
              <i className="fas fa-map-marker-alt"></i>
              <div className="address__details">
                <div>
                  <p className="address__details--name">{activeUser.name}</p>
                  <p className="address__details--mobile">
                    {activeUser.mobile}
                  </p>
                  <p className="address__details--address">{address.address}</p>
                </div>
                <div>
                  <a href="#">Edit</a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <small className="text-muted">No address available</small>
        )}

        {/* <div className="address">
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
        </div> */}
      </div>
    </div>
  );
};

export default AddressTab;
