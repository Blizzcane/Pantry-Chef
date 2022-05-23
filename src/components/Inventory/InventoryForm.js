import React from "react";
import "./InventoryForm.css";

const InventoryForm = ({ onRemoveHandler, inventory }) => {
  return (
    <div className="flexForm">
      <h2 className="text-center ">Inventory to Add</h2>
      <ul className="list-group ">
        {inventory.map((item) => (
          <a
            href="#"
            className="list-group-item list-group-item-action"
            key={item[1]}
            onClick={() => {
              onRemoveHandler(item);
            }}
          >
            {item[0]}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default InventoryForm;
