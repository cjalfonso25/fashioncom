import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = ({ pageData }) => {
  const { cart, setCart } = useContext(ProductContext);

  return (
    <div className="row">
      {pageData.map((product) => (
        <div key={product.id} className="col-12 col-md-4">
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
              <button
                className="btn btn-outline-dark btn-sm mt-2 mr-1"
                // disabled={!cart.includes(product) ? false : "disabled"}
                // onClick={() => setCart([...cart, product])}
              >
                <i className="far fa-heart"></i>
              </button>
              <button
                className="btn btn-outline-dark btn-sm mt-2"
                disabled={!cart.includes(product) ? false : "disabled"}
                onClick={() => setCart([...cart, product])}
              >
                {!cart.includes(product) ? "Add to cart" : "Added to cart"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
