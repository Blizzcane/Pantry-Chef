import React, { useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

const Recipes = ({ recipes }) => {
  const [open, setOpen] = useState(false);
  const [recipeInfo, setRecipeInfo] = useState([]);

  return (
    <div className="d-flex flex-wrap justify-content-between">
      <ul>
        {recipes.map((recipe) => (
          <li
            onClick={() => {
              setOpen(!open);
              setRecipeInfo(recipe);
              console.log(recipeInfo);
            }}
            aria-controls="recipe-details"
            aria-expanded={open}
            key={recipe.idMeal}
            className="card m-1"
          >
            <div className="card-body">{recipe.strMeal}</div>
          </li>
        ))}
      </ul>
      <aside style={{ minHeight: "100vh" }}>
        <Collapse in={open} dimension="width">
          <div id="recipe-details">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={recipeInfo?.strMealThumb} />
              <Card.Body>
                <Card.Title>{recipeInfo?.strMeal}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link to={`/recipe-details/${recipeInfo?.idMeal}`}>
                  <Button variant="primary">Go somewhere</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Collapse>
      </aside>
    </div>
  );
};

export default Recipes;
