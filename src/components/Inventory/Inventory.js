import React, { useEffect, useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import IngredientList from "./IngredientList";
import InventoryForm from "./InventoryForm";
import "./inventory.css";
import Loading from "../Loading";

const Inventory = ({ ingredients, onUpdatePantry, pantry }) => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    setInventory(pantry);
  }, []);

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
      <InventoryForm
        onUpdatePantry={onUpdatePantry}
        onRemoveHandler={onRemoveHandler}
        inventory={inventory}
      />
      <div className="vr" style={{ margin: "5px" }}></div>

      <IngredientList ingredients={ingredients} onAddHandler={onAddHandler} />
    </div>
  );
};

export default withAuthenticationRequired(Inventory, {
  onRedirecting: () => <Loading />,
});
