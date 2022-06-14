import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, ListGroup, ToggleButton } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const RecipeDetails = () => {
  let navigate = useNavigate();
  let { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Instructions", value: "1" },
    { name: "Ingredients", value: "2" },
  ];

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

  if (!recipe)
    return (
      <div>
        <p>Nothing to see here!</p>
        <Button
          variant="outline-success"
          size="sm"
          className="float-end"
          onClick={() => navigate("/dashboard")}
        >
          Go back
        </Button>
      </div>
    );

  const steps = recipe.strInstructions.split(".");
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`] !== "") {
      let name = recipe[`strIngredient${i}`];
      let measure = recipe[`strMeasure${i}`];
      ingredients.push({ name, measure });
    }
  }

  const instructionsJSX = (
    <ListGroup variant="flush" className="m-2" as="ol" numbered>
      {steps.map((step, idx) => (
        <ListGroup.Item
          as="li"
          key={"step" + idx}
          className="list-group-item"
        >
          {step}.
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

  const ingredientsJSX = (
    <ListGroup variant="flush" className="m-2">
      {ingredients.map((ingredient, idx) => (
        <ListGroup.Item key={"ingredient" + idx}>
          {ingredient.measure + " " + ingredient.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

  return (
    <div>
      <h1 className="text-center display-6 fw-normal">
        {recipe.strMeal.toUpperCase()}
      </h1>
      <div>
        <Button
          variant="outline-success"
          size="sm"
          className="float-end m-2"
          onClick={() => navigate("/dashboard")}
        >
          Go back
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          className="float-end m-2"
          onClick={() => window.open(recipe.strYoutube, "_blank")}
        >
          Watch Video
        </Button>
        <div>
          <img
            style={{ width: "20rem" }}
            className="shadow img-fluid img-thumbnail rounded float-start m-2"
            src={recipe.strMealThumb}
          />
        </div>
        <div className="text-center">
          <ButtonGroup className="mt-2">
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant="outline-success"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
        <div>{radioValue === "1" ? instructionsJSX : ingredientsJSX}</div>
      </div>
    </div>
  );
};

export default RecipeDetails;
