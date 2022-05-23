import React, { useState } from "react";
import IngredientList from "./IngredientList";
import InventoryForm from "./InventoryForm";

const Inventory = ({ ingredients }) => {
  const [inventory, setInventory] = useState([]);

  //add to the inventory form
  const onAddHandler = (item) => {
    const set = new Set(inventory); //helps avoid duplicate entries
    set.add(item);
    setInventory(() => [...set]);
  };

  //removes from the inventory form
  const onRemoveHandler = (item) => {
    const removedArr = inventory.filter((ingredient) => item !== ingredient);
    setInventory(() => removedArr);
  };

  return (
    <div>
      <InventoryForm onRemoveHandler={onRemoveHandler} inventory={inventory} />
      <IngredientList ingredients={ingredients} onAddHandler={onAddHandler} />
    </div>
  );
};

export default Inventory;
