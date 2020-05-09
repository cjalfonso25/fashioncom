import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import DropIn from "braintree-web-drop-in-react";
import { ProductContext } from "../context/ProductContext";
import { UserContext } from "../context/UserContext";
import Summary from "./Summary/Summary";
import Shipping from "./Shipping/Shipping";
import Radio from "../common/Radio";
import paypal from "paypal-checkout";
import braintree from "braintree-web";
import client from "braintree-web/client";
import paypalCheckout from "braintree-web/paypal-checkout";

const Checkout = () => {
  const { cart, showCart, setShowCart } = useContext(ProductContext);
  const { activeUser, setActiveUser } = useContext(UserContext);
  const [inst, setInst] = useState(null);
  const [total, setTotal] = useState(0);
  const [clientToken, setClientToken] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState({
    cod: false,
    creditCard: false,
    paypal: false,
  });

  const history = useHistory();

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
      if (response.status === 200) {
        //save transacation to mysql db
        //save order to user's order history
        setActiveUser({
          ...activeUser,
          orders: [...activeUser.orders, ...cart],
        });
        history.push("/projects/fashioncom/order-successful");
      }
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
                {!paymentMethod.creditCard ? null : (
                  <DropIn
                    options={{
                      authorization: clientToken,
                    }}
                    onInstance={(instance) => setInst(instance)}
                  />
                )}
                <Radio
                  label="Paypal"
                  id="paypal"
                  name="paymentMethod"
                  checked={paymentMethod.paypal}
                  onChange={setPaypalMethod}
                />

                {!paymentMethod.cod ? null : <h1>COD</h1>}
                {!paymentMethod.paypal ? null : <h1>Paypal</h1>}
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <Shipping
              totalPrice={total}
              paymentMethod={paymentMethod}
              buy={buy}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
