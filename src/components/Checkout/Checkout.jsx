import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import DropIn from "braintree-web-drop-in-react";
import { ProductContext } from "../context/ProductContext";
import Summary from "./Summary/Summary";
import Shipping from "./Shipping/Shipping";

const Checkout = () => {
  const { cart, showCart, setShowCart } = useContext(ProductContext);
  const [inst, setInst] = useState(null);
  const [total, setTotal] = useState(0);
  const [clientToken, setClientToken] = useState(null);

  useEffect(() => {
    async function getToken() {
      const { data } = await axios.get(
        "http://localhost:5000/api/payment/client_token"
      );
      setClientToken(data);
    }

    getToken();
  }, []);

  useEffect(() => {
    if (showCart) {
      setShowCart(!showCart);
    }
  });

  useEffect(() => {
    let totalPrice = 0;
    cart.map((item) => (totalPrice += item.subTotal));
    setTotal(totalPrice);
  }, [cart]);

  const buy = async () => {
    try {
      const { nonce } = await inst.requestPaymentMethod();
      const response = await axios.post(
        "http://localhost:5000/api/payment/checkout",
        { nonce, total }
      );
      console.log("RESPONSE", response);
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <Summary />

            <div className="checkout-card card">
              <div className="card-header">Mode of Payment</div>
              <div className="card-body">
                {!clientToken ? (
                  <small>Loading...</small>
                ) : (
                  <DropIn
                    options={{
                      authorization: clientToken,
                    }}
                    onInstance={(instance) => setInst(instance)}
                  />
                )}
                {/* <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="cod"
                    name="customRadio"
                    className="custom-control-input"
                  />
                  <label className="custom-control-label" htmlFor="cod">
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
                  <label className="custom-control-label" htmlFor="creditCard">
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
                  <label className="custom-control-label" htmlFor="paypal">
                    Paypal
                  </label>
                </div> */}
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <Shipping totalPrice={total} buy={buy} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
