import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const CardItems = ({ currentItems }) => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {currentItems.map(({ idMeal, strMealThumb, strMeal }) => (
        <Link
          key={idMeal}
          to={`/recipe-details/${idMeal}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card className="bg-dark rounded mb-2" style={{ width: "14rem" }}>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.ImgOverlay>
              <Card.Title>{strMeal.toUpperCase()} </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CardItems;
