import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import Button from "../common/Button";

const Cart = () => {
  const { cart, setCart, showCart, setShowCart } = useContext(ProductContext);
  const [total, setTotal] = useState(0);
  const history = useHistory();

  useEffect(() => {
    let totalPrice = 0;
    cart.map((item) => (totalPrice += item.subTotal));
    setTotal(totalPrice);
  }, [cart]);

  const handleDelete = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const handleEmptyCart = () => {
    setCart([]);
  };

  // const calculateTotalPrice = () => {
  //   for (const item in cart) {
  //     setTotalPrice((prev) => prev + item.price);
  //     console.log(totalPrice);
  //   }
  // };

  return (
    <div className={showCart ? "cart-container show-cart" : "cart-container"}>
      <div className="cart-toggle-btn d-block d-sm-block d-md-none">
        <button
          className="btn btn-dark float-cart-btn"
          id="float-cart-btn"
          onClick={() => setShowCart(!showCart)}
        >
          <i className="fas fa-shopping-cart"></i>
          <span className="badge badge-danger cart-badge">{cart.length}</span>
        </button>
      </div>
      <div>
        <div className="d-flex justify-content-between">
          <h3>My Cart</h3>
          <Button
            label="Delete All"
            className=" btn-secondary btn-sm m-0"
            onClick={handleEmptyCart}
          />
        </div>
        <div className="cart-items">
          {cart.length < 1 ? (
            <small className="text-muted">No items in cart</small>
          ) : (
            cart.map((item) => (
              <div key={item._id} className="cart-item">
                <div className="cart-item__image">
                  <img src={item.image} alt="" />
                </div>
                <div className="cart-item__details">
                  <h6 className="m-0">{item.name}</h6>
                  <p>${item.subTotal}</p>
                  <p>x{item.quantity}</p>
                  <i
                    className="fas fa-trash-alt"
                    onClick={() => handleDelete(item._id)}
                  ></i>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <h5 className="my-2">Total: ${total}</h5>
      <Button
        label="Checkout"
        className="btn-dark form-control m-0"
        disabled={cart.length < 1 ? "disabled" : false}
        onClick={() => history.push("/projects/fashioncom/checkout")}
      />
    </div>
  );
};

export default Cart;
