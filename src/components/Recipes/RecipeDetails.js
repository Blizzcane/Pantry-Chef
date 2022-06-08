import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const RecipeDetails = () => {
  let navigate = useNavigate();
  let { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      );
      const data = await response.json();
      setRecipe(data.meals[0]);
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [recipeId]);

  if (!recipe) return <div>Nothing here!</div>;

  const steps = recipe.strInstructions.split(".");

  return (
    <div>
      <h1 className=" display-6 fw-normal">{recipe.strMeal.toUpperCase()}</h1>

      <div>
        <Button
          variant="outline-success"
          size="sm"
          className="float-end"
          onClick={() => navigate("/dashboard")}
        >
          Go back
        </Button>
        <div>
          <img
            style={{ width: "20rem" }}
            className="img-fluid img-thumbnail rounded float-start m-2"
            src={recipe.strMealThumb}
          />
        </div>
        <div>
          <ul className="list-group list-group-flush list-group-numbered m-2">
            {steps.map((step) => (
              <li key={step.slice(0, 4)} className="list-group-item">
                {step}.
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
