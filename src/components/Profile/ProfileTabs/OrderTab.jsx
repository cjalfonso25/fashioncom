import React from "react";

const OrderTab = ({ orders }) => {
  return (
    <div
      className="tab-pane fade"
      id="v-pills-orders"
      role="tabpanel"
      aria-labelledby="v-pills-orders-tab"
    >
      <h1 className="profile__tab-title">Orders</h1>
      <small className="text-muted">
        {orders.length > 1 ? `${orders.length} ITEMS` : `${orders.length} ITEM`}
      </small>

      <div className="orders">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div className="order">
              <div className="order__id">
                <h3>Order #{order._id}</h3>
                <a href="#">View Order</a>
              </div>
              <div className="order__date">
                <small className="text-muted">Placed: {order.orderDate}</small>
                <small className="text-muted">
                  Status: {order.orderStatus}
                </small>
              </div>
            </div>
          ))
        ) : (
          <small className="text-muted">No items available.</small>
        )}
      </div>
    </div>
  );
};

export default OrderTab;
