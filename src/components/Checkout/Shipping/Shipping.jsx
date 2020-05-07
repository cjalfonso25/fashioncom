import React from "react";

const Shipping = ({ totalPrice }) => {
  return (
    <div className="checkout__ship-info">
      <div className="checkout-card card">
        <div className="card-header">Shipping</div>
        <div className="card-body">
          <p className="card-text text-muted">
            <i className="fas fa-map-marker-alt"></i> 12 st. New City,
            Philippines
          </p>

          <div className="checkout__total">
            <p>
              Subtotal: <span>${totalPrice}</span>
            </p>
            <p>
              Shipping fee: <span>FREE</span>
            </p>
            <p>
              Voucher <span>0</span>
            </p>
            <p>
              Total: <span>${totalPrice}</span>
            </p>
          </div>
          <a
            href="#"
            className={
              totalPrice <= 0
                ? "btn btn-primary form-control disabled"
                : "btn btn-primary form-control"
            }
          >
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
