import React, { useEffect, useState } from "react";
import Profile from "../Profile";
import InventoryView from "./InventoryView";
import RecipeView from "./RecipeView";
import axios from "axios";

//need to find a cheaper API

const Dashboard = ({ pantry }) => {
  const [recipes, setRecipes] = useState([]);
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

  useEffect(() => {
    pantry.forEach((item) => {
      axios(url+item.strIngredient)
        .then((response) =>
          setRecipes((prevRecipes) => [...prevRecipes, ...response.data.meals])
        )
        .catch((err) => console.log(err));
    }); 
  }, [pantry]);

  return (
    <>
      <Profile />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <h3 className="">Recipes</h3>
            <RecipeView recipes={recipes} />
          </div>

          <div className="col">
            <h3>Inventory</h3>
            <InventoryView pantry={pantry} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
