import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CardItems from "./CardItems";
import ListItems from "./ListItems";

const Pagination = ({ items, itemsPerPage, ulClass, liClass, viewList }) => {
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
      {viewList ? (
        <ListItems
          currentItems={currentItems}
          liClass={liClass}
          ulClass={ulClass}
        />
      ) : (
        <CardItems
          currentItems={currentItems}
          liClass={liClass}
          ulClass={ulClass}
        />
      )}
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
