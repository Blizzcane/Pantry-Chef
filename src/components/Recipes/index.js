import React, { useState } from "react"; 
import RecipePopUp from "./RecipePopUp";

const Recipes = ({ recipes }) => {
  const [open, setOpen] = useState(false);
  const [recipeInfo, setRecipeInfo] = useState([]);

  return (
    <div className="d-flex flex-wrap justify-content-between">
      <ul>
        {recipes.map((recipe) => (
          <li
            onClick={() => {
              setOpen(!open);
              setRecipeInfo(recipe);
              console.log(recipeInfo);
            }}
            aria-controls="recipe-details"
            aria-expanded={open}
            key={recipe.idMeal}
            className="card m-1"
          >
            <div className="card-body">{recipe.strMeal}</div>
          </li>
        ))}
      </ul>
      <RecipePopUp recipe={recipeInfo} open={open} />
    </div>
  );
};

export default Recipes;
