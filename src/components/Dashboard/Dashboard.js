import React, { useEffect, useState } from "react";
import Profile from "../Profile";
import InventoryView from "./InventoryView";
import RecipeView from "./RecipeView";
import axios from "axios";

const Dashboard = ({ pantry }) => {
  const [recipes, setRecipes] = useState([]);
  const apiKey = "de299299b65b430a8672d0fa7ee9d94b";
  const ingredients = pantry
    .map((item) => item[0])
    .map((item) => item.replaceAll(" ", "%20"))
    .join("+");

  const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}&number=20`;

  useEffect(() => { 
      axios(url)
        .then((response) => setRecipes(response.data))
        .catch((err) => console.log(err)); 
  }, [recipes]);

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
