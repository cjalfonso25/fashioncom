import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const Products = ({ pageData }) => {
  const { cart, setCart } = useContext(ProductContext);

  const handleAddToCart = (product) => {
    let newObj = { ...product };
    newObj.quantity = 1;
    newObj.subTotal = product.price;
    setCart([...cart, newObj]);
  };

  return (
    <div className="row">
      {pageData.map((product, index) => (
        <div key={product.id} className="col-6 col-md-4">
          <div className="card">
            <Link
              to={{
                pathname: `/projects/fashioncom/products/${product.id}`,
              }}
            >
              <img
                src={product.image}
                className="card-img-top item__image"
                alt="..."
              />
            </Link>
            <div className="card-body">
              <Link
                to={{
                  pathname: `/projects/fashioncom/products/${product.id}`,
                }}
              >
                <h5 className="card-title item__name">{product.name}</h5>
                <p className="card-text item__price">${product.price}</p>
              </Link>
              <Button
                label={<i className="far fa-heart"></i>}
                className="btn-outline-dark btn-sm mt-2 mr-1 add-wishlist"
              />
              <Button
                label={
                  cart.filter((p) => p.id === product.id).length <= 0
                    ? "Add to cart"
                    : "Added to cart"
                }
                className="btn-outline-dark btn-sm mt-2"
                disabled={
                  cart.filter((p) => p.id === product.id).length <= 0
                    ? false
                    : "disabled"
                }
                onClick={() => handleAddToCart(product)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
