import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Items = ({ currentItems }) => {
  return (
    <ul className="list-group list-group-flush">
      {currentItems.map((item, idx) => (
        <li className="list-group-item" key={item + idx}>
          {item[0]}
        </li>
      ))}
    </ul>
  );
};

const InventoryView = ({ itemsPerPage, pantry }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(pantry.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(pantry.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, pantry]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % pantry.length;
    setItemOffset(newOffset);
  };

  if (pantry.length === 0) return <p>No items in inventory</p>;

  return (
    <>
      <Items currentItems={currentItems} />
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

export default InventoryView;
