import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { UserContext } from "../context/UserContext";
import { getProduct } from "../../services/fakeProducts";
import Button from "../common/Button";

const Product = (props) => {
  const { cart, setCart } = useContext(ProductContext);
  const { activeUser, setActiveUser } = useContext(UserContext);
  const [product, setProduct] = useState({});
  const id = props.match.params.id;
  const history = useHistory();

  useEffect(() => {
    setProduct(getProduct(id));
  }, []);

  const handleAddToCart = () => {
    let newObj = { ...product };
    newObj.quantity = 1;
    newObj.subTotal = product.price;
    setCart([...cart, newObj]);
  };

  const handleAddToWishlist = () => {
    if (activeUser) {
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
    } else history.push("/projects/fashioncom/login");
  };

  return (
    <div className="product">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 mb-3">
            <img className="product__image" src={product.image} alt="" />
          </div>
          <div className="col-12 col-md-7">
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <div className="input input__color">
              <label htmlFor="color">Color</label>
              <select className="custom-select" id="color" required>
                <option defaultValue disabled value="">
                  Choose...
                </option>
                <option value="1">Red</option>
                <option value="2">Blue</option>
                <option value="3">Yellow</option>
              </select>
            </div>

            <div className="input input__size">
              <label htmlFor="size">Size</label>
              <select className="custom-select" id="size" required>
                <option defaultValue disabled value="">
                  Choose...
                </option>
                <option value="1">XL</option>
                <option value="2">L</option>
                <option value="3">M</option>
              </select>
            </div>

            <div className="input input__quantity">
              <label htmlFor="quantity">Quantity</label>
              <div className="input-group mw-25">
                <div className="input-group-prepend">
                  <div className="input-group-text">-</div>
                </div>
                <input
                  type="text"
                  className="form-control text-center "
                  id="quantity"
                  placeholder="1"
                />
                <div className="input-group-append">
                  <div className="input-group-text">+</div>
                </div>
              </div>
            </div>

            <div className="btn-wrapper mt-4 d-flex">
              <Button
                label={
                  activeUser
                    ? activeUser.wishlists.filter(
                        (wishlist) => wishlist._id === product._id
                      ).length <= 0
                      ? "Add to Wishlist"
                      : "Added to Wishlist"
                    : "Add to Wishlist"
                }
                className="btn-outline-secondary w-100 mx-2"
                onClick={handleAddToWishlist}
              />
              <Button
                label={
                  cart.filter((p) => p._id === product._id).length <= 0
                    ? "Add to cart"
                    : "Added to cart"
                }
                className="btn btn-outline-dark w-100 mx-2"
                disabled={
                  cart.filter((p) => p._id === product._id).length <= 0
                    ? false
                    : "disabled"
                }
                onClick={handleAddToCart}
              />
            </div>
          </div>
        </div>

        <div className="reviews mt-3">
          <div className="reviews__rating">
            <h2>Reviews</h2>

            <p>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <small className="text-muted ml-1">916 total reviews</small>
            </p>
          </div>

          <div className="reviews__sort">
            <p>Filter:</p>
            <div className="filters"></div>
          </div>

          <div className="reviews__content">
            <div className="review">
              <div className="review__name-wrapper">
                <p className="review__name">John Doe</p>
                <small className="text-muted">4 days ago</small>
              </div>
              <p className="review__rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </p>
              <p className="review__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="review">
              <div className="review__name-wrapper">
                <p className="review__name">John Doe</p>
                <small className="text-muted">4 days ago</small>
              </div>
              <p className="review__rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </p>
              <p className="review__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
