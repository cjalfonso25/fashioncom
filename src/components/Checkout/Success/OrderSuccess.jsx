import React, { useEffect, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const OrderSuccess = () => {
  const { setCart } = useContext(ProductContext);

  useEffect(() => {
    setCart([]);
  }, []);

  return (
    <div className="order-success-page">
      <i class="far fa-check-circle order-check"></i>
      <h1>Order Successfully Placed</h1>
      <h5>Thank you for your purchase!</h5>
      <p>Order #0000023235</p>
      <button className="btn btn-dark">Continue Shopping</button>
    </div>
  );
};

export default OrderSuccess;
