import React from "react";
import { Button } from "react-bootstrap";
import "./InventoryForm.css";

const InventoryForm = ({ onRemoveHandler, inventory }) => {
  return (
    <div className="flexForm">
      <h2 className="text-center">Inventory to Add</h2>

      <div class="d-grid gap-2">
        {inventory.length > 0 ? (
          <Button className="btn btn-success btn-sm">Add to Pantry</Button>
        ) : (
          <p className="text-center text-muted">
            select items to add to your pantry
          </p>
        )}
      </div>
      <ul className="list-group ">
        {inventory.map((item) => (
          <a
            href="#"
            className="list-group-item list-group-item-action"
            key={item[1]}
            title="Remove ingredient"
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
