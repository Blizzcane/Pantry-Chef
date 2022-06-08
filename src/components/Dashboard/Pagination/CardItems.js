import React from "react";
import { Link } from "react-router-dom";

const CardItems = ({ currentItems }) => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {currentItems.map(({ idMeal, strMealThumb, strMeal }) => (
        <Link
          key={idMeal}
          to={`/recipe-details/${idMeal}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="card m-2" style={{ width: "14rem" }}>
            <img src={strMealThumb} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{strMeal}</h5> 
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardItems;
