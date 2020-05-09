import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { UserContext } from "../context/UserContext";
import Button from "../common/Button";

const Products = ({ pageData }) => {
  const { cart, setCart } = useContext(ProductContext);
  const { activeUser, setActiveUser } = useContext(UserContext);

  const handleAddToCart = (product) => {
    let newObj = { ...product };
    newObj.quantity = 1;
    newObj.subTotal = product.price;
    setCart([...cart, newObj]);
  };

  const handleAddToWishlist = (product) => {
    if (
      activeUser.wishlists.filter((wishlist) => wishlist._id === product._id)
        .length > 0
    )
      setActiveUser({
        ...activeUser,
        wishlists: activeUser.wishlists.filter(
          (wishlist) => product._id !== wishlist._id
        ),
      });
    else
      setActiveUser({
        ...activeUser,
        wishlists: [...activeUser.wishlists, product],
      });
  };

  return (
    <div className="row">
      {pageData.map((product, index) => (
        <div key={product._id} className="col-6 col-md-4">
          <div className="card">
            <Link
              to={{
                pathname: `/projects/fashioncom/products/${product._id}`,
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
                  pathname: `/projects/fashioncom/products/${product._id}`,
                }}
              >
                <h5 className="card-title item__name">{product.name}</h5>
                <p className="card-text item__price">${product.price}</p>
              </Link>
              <Button
                label={
                  activeUser.wishlists.filter(
                    (wishlist) => wishlist._id === product._id
                  ).length > 0 ? (
                    <i className="fas fa-heart"></i>
                  ) : (
                    <i className="far fa-heart"></i>
                  )
                }
                className="btn-outline-dark btn-sm mt-2 mr-1 add-wishlist"
                onClick={() => handleAddToWishlist(product)}
              />
              <Button
                label={
                  cart.filter((p) => p._id === product._id).length <= 0
                    ? "Add to cart"
                    : "Added to cart"
                }
                className="btn-outline-dark btn-sm mt-2"
                disabled={
                  cart.filter((p) => p._id === product._id).length <= 0
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
