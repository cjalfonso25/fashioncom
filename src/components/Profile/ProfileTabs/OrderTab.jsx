import React from "react";

const OrderTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="v-pills-orders"
      role="tabpanel"
      aria-labelledby="v-pills-orders-tab"
    >
      <h1 className="profile__tab-title">Orders</h1>
      <small className="text-muted">6 ITEMS</small>

      <div className="orders">
        <div className="order">
          <div className="order__id">
            <h3>Order 203192519235</h3>
            <a href="#">View Order</a>
          </div>
          <div className="order__date">
            <small className="text-muted">Placed: January 1, 2020</small>
            <small className="text-muted">Status: In progress</small>
          </div>
        </div>

        <div className="order">
          <div className="order__id">
            <h3>Order 203192519235</h3>
            <a href="#">View Order</a>
          </div>
          <div className="order__date">
            <small className="text-muted">Placed: January 1, 2020</small>
            <small className="text-muted">Status: In progress</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTab;
