import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Items = ({ currentItems, ulClass, liClass }) => {
  return (
    <ul className={ulClass}>
      {currentItems.map((item, idx) => (
        <li className={liClass} key={item + idx}>
          {item[0]}
        </li>
      ))}
    </ul>
  );
};

const Pagination = ({ items, itemsPerPage, ulClass, liClass }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} liClass={liClass} ulClass={ulClass} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="page-item"
        activeLinkClassName="page-link"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
      />
    </>
  );
};

export default Pagination;
