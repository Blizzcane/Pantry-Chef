import React from "react";

const Recipes = ({ recipes }) => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      <ul>
        {" "}
        {recipes.map((recipe) => (
          <li key={recipe.idMeal} className="card m-1">
            <div className="card-body">{recipe.strMeal}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
