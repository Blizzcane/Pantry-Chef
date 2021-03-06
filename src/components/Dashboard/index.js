import React, { useState } from "react";
import Profile from "../Profile";
import InventoryView from "./InventoryView";
import RecipeView from "./RecipeView"; 
import { useNavigate } from "react-router-dom";

//need to find a cheaper API

const Dashboard = ({ pantry, recipes }) => {
  let navigate = useNavigate();
  const [filter, setFilter] = useState("");

  return (
    <>
      <Profile />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <h3>Recipes</h3>
            <p>
              Type to filter the list:
              <input
                className="form-control shadow-sm"
                id="filter"
                name="filter"
                type="text"
                value={filter}
                onChange={({ target }) => setFilter(target.value)}
              />
            </p>
            <RecipeView
              recipes={recipes.filter(
                (recipe) =>
                  recipe.strMeal.toLowerCase().includes(filter) || filter === ""
              )}
              itemsPerPage={8}
            />
          </div>

          <div className="col-3">
            <h3>Inventory</h3>
            <InventoryView pantry={pantry} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
