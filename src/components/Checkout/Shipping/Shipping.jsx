import React, { useEffect, useState } from "react";
import "braintree-web";

const Shipping = ({ totalPrice, buy }) => {
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
          <button
            className={
              totalPrice <= 0
                ? "btn btn-primary form-control disabled"
                : "btn btn-primary form-control"
            }
            // className="btn btn-primary form-control"
            onClick={buy}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
