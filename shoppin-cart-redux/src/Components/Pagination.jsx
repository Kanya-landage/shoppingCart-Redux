import React, { useEffect, useState } from "react";
import "./Pagination.css";
function Pagination({ itemsPerPage, pages, fetchLatestProduct, sortedData }) {
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getPaginatedData();
  }, [currentPage, parseInt(itemsPerPage), sortedData]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * itemsPerPage - itemsPerPage; //0
    const endIndex = startIndex + parseInt(itemsPerPage); //5
    fetchLatestProduct(startIndex, endIndex, sortedData);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pages) * pages;

    return new Array(pages).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      <div className="pagination" style={{ float: "left" }}>
        <li
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="prev"
        >
          <a>prev</a>
        </li>
        {getPaginationGroup().map((item, index) => (
          <li
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{Number.parseInt(item)}</span>
          </li>
        ))}
        <li
          onClick={goToNextPage}
          disabled={currentPage === pages}
          className="next"
        >
          <a>next</a>
        </li>
      </div>
    </div>
  );
}

export default Pagination;
