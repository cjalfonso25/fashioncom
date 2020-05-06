import React from "react";

const Checkout = () => {
  return (
    <div className="checkout-page">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="checkout__summary">
              <div className="checkout-card card">
                <div className="card-header">Summary</div>
                <div className="card-body checkout__summary--body">
                  <div className="checkout__summary--item">
                    <div className="checkout__summary--image">
                      <img
                        src="assets/img/woman-posing-for-photo-shoot-1689731.jpg"
                        alt=""
                      />
                    </div>
                    <div className="checkout__summary--details">
                      <h6>Clothes Name</h6>
                      <p>$99.90</p>

                      <div className="checkout__summary--quantity">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">-</div>
                          </div>
                          <input
                            type="text"
                            className="form-control quantity-selector"
                            id="quantity"
                          />
                          <div className="input-group-prepend">
                            <div className="input-group-text">+</div>
                          </div>
                        </div>
                      </div>

                      <i className="fas fa-trash-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="checkout-card card">
              <div className="card-header">Mode of Payment</div>
              <div className="card-body">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="cod"
                    name="customRadio"
                    className="custom-control-input"
                  />
                  <label className="custom-control-label" for="cod">
                    COD (Cash on Delivery)
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="creditCard"
                    name="customRadio"
                    className="custom-control-input"
                  />
                  <label className="custom-control-label" for="creditCard">
                    Credit Card
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="paypal"
                    name="customRadio"
                    className="custom-control-input"
                  />
                  <label className="custom-control-label" for="paypal">
                    Paypal
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
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
                      Subtotal: <span>99.90</span>
                    </p>
                    <p>
                      Shipping fee: <span>FREE</span>
                    </p>
                    <p>
                      Voucher <span>0</span>
                    </p>
                    <p>
                      Total: <span>$99.90</span>
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary form-control">
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
