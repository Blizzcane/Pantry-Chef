import React from "react";
import Pagination from "./Pagination/Pagination";

const InventoryView = ({ pantry }) => {
  if (!pantry) return <p>No items in inventory</p>;

  return (
    <Pagination
      itemsPerPage={10}
      items={pantry}
      liClass="list-group-item"
      ulClass="list-group list-group-flush"
      viewList={true}
    />
  );
};

export default InventoryView;
