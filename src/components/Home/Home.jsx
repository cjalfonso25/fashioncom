import React, { useState, useContext } from "react";
import Pagination from "../common/Pagination";
import ProductContext from "../context/ProductContext";

const Home = () => {
  const { products, cart, setCart, filter, setFilter } = useContext(
    ProductContext
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleFilters = (e) => {
    const name = e.target.name;
    const isChecked = e.target.checked;

    setFilter({ [name]: isChecked });
    console.log(filter);
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const pageData = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="home">
      <div className="home__banner"></div>

      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-2">
              <div className="filter-wrapper">
                <h6>Filters:</h6>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="mens"
                    name="men"
                    // checked={filter.men}
                    onChange={(e) => handleFilters(e)}
                  />
                  <label className="custom-control-label" htmlFor="mens">
                    Men's Clothing
                  </label>
                </div>

                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="womens"
                    name="women"
                  />
                  <label className="custom-control-label" htmlFor="womens">
                    Women's Clothing
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="accessories"
                    name="accessories"
                  />
                  <label className="custom-control-label" htmlFor="accessories">
                    Accessories
                  </label>
                </div>
              </div>
            </div>

            {/* PRODUCTS */}
            <div className="col-12 col-md-10 mt-3">
              <div className="row">
                {pageData.map((product) => (
                  <div key={product.id} className="col-12 col-md-4">
                    <div className="card">
                      <img
                        src={product.image}
                        className="card-img-top item__image"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title item__name">
                          {product.name}
                        </h5>
                        <p className="card-text item__price">
                          ${product.price}
                        </p>
                        <button
                          className="btn btn-outline-dark btn-sm"
                          disabled={
                            !cart.includes(product) ? false : "disabled"
                          }
                          onClick={() => setCart([...cart, product])}
                        >
                          {!cart.includes(product)
                            ? "Add to cart"
                            : "Added to cart"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Pagination
                totalProd={products.length}
                currentPage={currentPage}
                prodPerPage={itemsPerPage}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
