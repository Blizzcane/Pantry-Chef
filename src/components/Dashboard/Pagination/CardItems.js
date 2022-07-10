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
          <Card
            className="mb-2 shadow"
            style={{ maxWidth: "30rem", minWidth: "25rem" }}
          >
            <div className="row no-gutters">
              <div className="col-sm-5">
                <Card.Img src={strMealThumb} />
              </div>
              <div className="col-sm-7">
                <Card.Body>
                  <Card.Title>{strMeal.toUpperCase()} </Card.Title>
                </Card.Body>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CardItems;
