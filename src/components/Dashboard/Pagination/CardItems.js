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
          <Card className="mb-2 shadow" style={{ width: "14rem" }}>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
              <Card.Title>{strMeal.toUpperCase()} </Card.Title>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CardItems;
