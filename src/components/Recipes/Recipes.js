import React from "react";

const Recipes = ({ recipes }) => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} className="card m-1">
          <div className="card-body">{recipe.strMeal}</div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
