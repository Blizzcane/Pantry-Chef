import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Collapse, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFetch from "../../utils/useFetch";

const RecipePopUp = ({ recipeId, open }) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
  const [recipe, error] = useFetch(url);

  return (
    recipe && (
      <aside style={{ minHeight: "100vh" }}>
        <Collapse in={open} dimension="width">
          <div id="recipe-details">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={recipe[0]?.strMealThumb} />
              <Card.Body>
                <Card>
                  <Card.Body>
                    <Card.Title>{recipe[0]?.strMeal}</Card.Title>
                  </Card.Body>
                </Card>
                <Link
                  className="d-grid gap-2"
                  to={`/recipe-details/${recipe[0]?.idMeal}`}
                >
                  <Button variant="success" size="sm">
                    View Full Recipe
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Collapse>
      </aside>
    )
  );
};

export default RecipePopUp;
