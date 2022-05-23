import React from "react";

const InventoryForm = ({ onRemoveHandler, inventory }) => {
  return (
    <>
      <ul className="list-group">
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
    </>
  );
};

export default InventoryForm;
