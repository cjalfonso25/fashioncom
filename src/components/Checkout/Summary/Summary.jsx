import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const Summary = () => {
  const { cart, setCart } = useContext(ProductContext);

  const handleDelete = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const handleSubQuantity = (index) => {
    let newCart = [...cart];
    if (newCart[index].quantity < 1) newCart[index].quantity = 1;

    newCart[index].quantity -= 1;
    newCart[index].subTotal = newCart[index].price * newCart[index].quantity;

    setCart(newCart);
  };

  const handleAddQuantity = (index) => {
    let newCart = [...cart];
    newCart[index].quantity += 1;
    newCart[index].subTotal = newCart[index].price * newCart[index].quantity;

    setCart(newCart);
  };

  return (
    <div className="checkout__summary">
      <div className="checkout-card card">
        <div className="card-header">Summary</div>
        <div className="card-body checkout__summary--body">
          {cart.length === 0 ? (
            <small className="text-muted">No items in your cart.</small>
          ) : (
            cart.map((item, index) => (
              <div key={item._id} className="checkout__summary--item">
                <div className="checkout__summary--image">
                  <img src={item.image} alt="" />
                </div>
                <div className="checkout__summary--details">
                  <h6>{item.name}</h6>
                  <p className="subtotal">${item.subTotal}</p>

                  <div className="checkout__summary--quantity">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div
                          className="input-group-text"
                          onClick={() => handleSubQuantity(index)}
                        >
                          -
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control quantity-selector text-center"
                        disabled="disabled"
                        value={item.quantity}
                      />
                      <div className="input-group-append">
                        <div
                          className="input-group-text"
                          onClick={() => handleAddQuantity(index)}
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>

                  <i
                    className="fas fa-trash-alt"
                    onClick={(e) => handleDelete(item._id)}
                  ></i>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Summary;
