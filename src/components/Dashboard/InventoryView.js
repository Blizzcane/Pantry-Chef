import React from "react";

const InventoryView = ({ pantry }) => {
  if (pantry.length == 0) return <p>No items in inventory</p>;

  return (
    <ul className="list-group list-group-flush">
      {pantry.map((item) => (
        <li className="list-group-item">{item[0]}</li>
      ))}
    </ul>
  );
};

export default InventoryView;
