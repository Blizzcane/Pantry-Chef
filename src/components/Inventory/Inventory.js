import React, { useState } from "react";
import IngredientList from "./IngredientList";
import InventoryForm from "./InventoryForm";
import './inventory.css'

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
    <div className="inventory">
      <InventoryForm onRemoveHandler={onRemoveHandler} inventory={inventory} />
      <div class="vr" style={{margin:"5px"}}></div>

      <IngredientList ingredients={ingredients} onAddHandler={onAddHandler} />
    </div>
  );
};

export default Inventory;
