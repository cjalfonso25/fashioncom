import React from "react";

const Product = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 mb-3">
            <img
              className="product__image"
              src="assets/img/man-wearing-black-hat-and-black-coat-157675.jpg"
              alt=""
            />
          </div>
          <div className="col-12 col-md-7">
            <h4>Clothes 1</h4>
            <p>$99.90</p>
            <form>
              <div className="input input__color">
                <label for="color">Color</label>
                <select className="custom-select" id="color" required>
                  <option selected disabled value="">
                    Choose...
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="input input__size">
                <label for="size">Size</label>
                <select className="custom-select" id="size" required>
                  <option selected disabled value="">
                    Choose...
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="input input__quantity">
                <label for="quantity">Quantity</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">-</div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="quantity"
                    placeholder="1"
                  />
                  <div className="input-group-prepend">
                    <div className="input-group-text">+</div>
                  </div>
                </div>
              </div>

              <div className="btn-wrapper mt-4">
                <button className="btn btn-primary form-control">
                  Add to cart
                </button>
                <button className="btn btn-primary form-control mt-2">
                  Buy now
                </button>
              </div>
            </form>
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
