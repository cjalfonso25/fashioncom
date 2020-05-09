import React, { useState } from "react";

const AddressTab = ({
  activeUser,
  addresses,
  showAddAddress,
  handleShowAddAddress,
  handleAddAddress,
}) => {
  const [address, setAddress] = useState({});

  return (
    <div
      className="tab-pane fade"
      id="v-pills-address"
      role="tabpanel"
      aria-labelledby="v-pills-address-tab"
    >
      <h1 className="profile__tab-title">Address</h1>
      <small className="btn btn-sm btn-link" onClick={handleShowAddAddress}>
        <i className="fas fa-plus"></i> Add new address
      </small>
      {showAddAddress ? (
        <div className="form-row">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              placeholder="Street, Building, City, Province"
              onChange={(e) => setAddress({ id: 2, address: e.target.value })}
            />
          </div>
          <div className="col">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!address ? "disabled" : false}
              onClick={() => handleAddAddress(address)}
            >
              Add
            </button>
          </div>
        </div>
      ) : null}

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
