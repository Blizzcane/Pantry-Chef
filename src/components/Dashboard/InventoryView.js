import React from "react";
import Pagination from "../Pagination";

const InventoryView = ({ pantry }) => {
  if (pantry.length === 0) return <p>No items in inventory</p>;

  return (
    <Pagination
      itemsPerPage={6}
      items={pantry}
      liClass="list-group-item"
      ulClass="list-group list-group-flush"
      viewList={true}
    />
  );
};

export default InventoryView;
