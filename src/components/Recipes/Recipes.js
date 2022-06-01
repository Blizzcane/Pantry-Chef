import React from "react";

const Recipes = ({ recipes }) => {
  return (
    <div className="d-flex flex-wrap justify-content-start">
      {recipes.map((recipe) => (
        <div className="card m-1">
          <div className="card-body">This is some text within a card body.</div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
