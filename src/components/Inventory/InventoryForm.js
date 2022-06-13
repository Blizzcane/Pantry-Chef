import React from "react";
import { Button } from "react-bootstrap";
import "./InventoryForm.css";

const InventoryForm = ({ onRemoveHandler, inventory, onUpdatePantry }) => {
  const onSubmitHandler = () => {
    onUpdatePantry(inventory);
  };
  
  return (
    <div className="flexForm">
      <h2 className="text-center">Inventory to Add</h2>

      <div className="d-grid gap-2">
        {inventory.length > 0 ? (
          <Button onClick={onSubmitHandler} className="btn btn-success btn-sm shadow-sm">Update Pantry</Button>
        ) : (
          <p className="text-center text-muted">
            select items to add to your pantry
          </p>
        )}
      </div>
      <ul className="list-group shadow-sm">
        {inventory.map((item) => (
          <a
            href="#"
            className="list-group-item list-group-item-action"
            key={item.idIngredient}
            title="Remove ingredient"
            onClick={() => {
              onRemoveHandler(item);
            }}
          >
            {item.strIngredient}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default InventoryForm;
