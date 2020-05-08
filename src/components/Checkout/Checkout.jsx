import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import DropIn from "braintree-web-drop-in-react";
import { ProductContext } from "../context/ProductContext";
import Summary from "./Summary/Summary";
import Shipping from "./Shipping/Shipping";
import Radio from "../common/Radio";
import paypal from "paypal-checkout";
import braintree from "braintree-web";
import client from "braintree-web/client";
import paypalCheckout from "braintree-web/paypal-checkout";

const Checkout = () => {
  const { cart, showCart, setShowCart } = useContext(ProductContext);
  const [inst, setInst] = useState(null);
  const [total, setTotal] = useState(0);
  const [clientToken, setClientToken] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState({
    cod: false,
    creditCard: false,
    paypal: false,
  });

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

  const setCreditCardMethod = () =>
    setPaymentMethod({ cod: false, creditCard: true, paypal: false });

  const setCODMethod = () =>
    setPaymentMethod({ cod: true, creditCard: false, paypal: false });

  const setPaypalMethod = () =>
    setPaymentMethod({ cod: false, creditCard: false, paypal: true });

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
                <Radio
                  label="COD (Cash on Delivery)"
                  id="cod"
                  name="paymentMethod"
                  checked={paymentMethod.cod}
                  onChange={setCODMethod}
                />
                <Radio
                  label="Credit Card"
                  id="creditCard"
                  name="paymentMethod"
                  checked={paymentMethod.creditCard}
                  onChange={setCreditCardMethod}
                />
                <Radio
                  label="Paypal"
                  id="paypal"
                  name="paymentMethod"
                  checked={paymentMethod.paypal}
                  onChange={setPaypalMethod}
                />

                {!paymentMethod.creditCard ? null : (
                  <DropIn
                    options={{
                      authorization: clientToken,
                    }}
                    onInstance={(instance) => setInst(instance)}
                  />
                )}
                {!paymentMethod.cod ? null : <h1>COD</h1>}
                {!paymentMethod.paypal ? null : <h1>Paypal</h1>}
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
