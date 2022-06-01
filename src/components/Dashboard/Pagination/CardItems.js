import React from "react";

const CardItems = ({ currentItems }) => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {currentItems.map(({ idMeal, strMealThumb, strMeal }) => (
        <div key={idMeal} className="card m-2" style={{ width: "14rem" }}>
          <img src={strMealThumb} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{strMeal}</h5>
            <a href="#" className=" stretched-link"></a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItems;
