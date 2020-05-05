import React from "react";
import _ from "lodash";

const Pagination = ({ totalProd, currentPage, prodPerPage, paginate }) => {
  const pagesCount = Math.ceil(totalProd / prodPerPage);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <div className="pagination">
      <nav className="m-auto">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <span onClick={() => paginate(page)} className="page-link">
                {page}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
