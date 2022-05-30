import React from "react";

const CardItems = ({ currentItems }) => {
  return (
    <div className="d-flex flex-wrap justify-content-evenly ">
      {currentItems.map((recipe, idx) => (
        <div key={recipe + idx} className="card m-2" style={{ width: "16rem" }}>
          <img src={recipe.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
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
