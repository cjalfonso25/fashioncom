import React, { useState, useContext, useEffect } from "react";
import _ from "lodash";
import { ProductContext } from "../context/ProductContext";
import Filter from "../Filter/Filter";
import Products from "../Products/Products";
import Pagination from "../common/Pagination";

const Home = () => {
  const { products, filter, setFilter } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  useEffect(() => {
    document.title = "Home - FashionCom";
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleFilters = (e) => {
    const name = e.target.id;
    const isChecked = e.target.checked;

    setFilter({ ...filter, [name]: isChecked });
    setCurrentPage(1);
  };

  const getPageData = () => {
    let filtered = products;
    if (filter.men)
      filtered = products.filter((product) => product.category === "men");
    else if (filter.women)
      filtered = products.filter((product) => product.category === "women");

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const pageData = _(filtered)
      .slice(indexOfFirstProduct)
      .take(itemsPerPage)
      .value();

    return {
      totalCount: filtered.length,
      data: pageData,
    };
  };

  const { totalCount, data: pageData } = getPageData();

  return (
    <div className="home">
      <div className="home__banner"></div>
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-2">
              <Filter filter={filter} onChange={handleFilters} />
            </div>

            {/* PRODUCTS */}
            <div className="col-12 col-md-10 mt-3">
              <Products pageData={pageData} />
              <Pagination
                totalProd={totalCount}
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
