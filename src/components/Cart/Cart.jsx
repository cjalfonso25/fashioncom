import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import Button from "../common/Button";

const Cart = () => {
  const { cart, setCart, showCart, setShowCart } = useContext(ProductContext);

  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

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
        <h3>My Cart</h3>
        <div className="cart-items">
          {cart.length < 1 ? (
            <small className="text-muted">No items in cart</small>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item__image">
                  <img src={item.image} alt="" />
                </div>
                <div className="cart-item__details">
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>x1</p>
                  <i
                    className="fas fa-trash-alt"
                    onClick={() => handleDelete(item.id)}
                  ></i>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Button
        label="Checkout"
        className="btn-dark form-control"
        disabled={cart.length < 1 ? "disabled" : false}
        onClick={() => (window.location = "/projects/fashioncom/checkout")}
      />
    </div>
  );
};

export default Cart;
