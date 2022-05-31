import React from "react";

const CardItems = ({ currentItems }) => {  
  return (
    <div className="d-flex flex-wrap justify-content-evenly ">
      {currentItems.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="card m-2"
          style={{ width: "16rem" }}
        >
          <img src={recipe.strMealThumb} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{recipe.strMeal}</h5> 
            <a href="#" className="btn btn-primary">
              View Recipe
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItems;
