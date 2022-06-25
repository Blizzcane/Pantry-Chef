import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, ListGroup, ToggleButton } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useFavorite from "../../utils/useFavorite";

const RecipeDetails = ({ onFavUpdate, favorites }) => {
  let navigate = useNavigate();
  let { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [radioValue, setRadioValue] = useState("1");
  const [fav, setFav] = useState(false);

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
    setFav(favorites.includes(recipeId));

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
    if (recipe[`strIngredient${i}`] === "") break;
    let name = recipe[`strIngredient${i}`];
    let measure = recipe[`strMeasure${i}`];
    ingredients.push({ name, measure });
  }

  const onFavHandler = (e) => {
    setFav(e.currentTarget.checked);
    !fav
      ? onFavUpdate(recipe.idMeal, "add")
      : onFavUpdate(recipe.idMeal, "remove");
  };

  const instructionsJSX = (
    <ListGroup variant="flush" className="m-2" as="ol" numbered>
      {steps.map((step, idx) => (
        <ListGroup.Item as="li" key={"step" + idx} className="list-group-item">
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
          onClick={() => navigate(-1)}
        >
          Go back
        </Button>
        {recipe.strYoutube != "" ? (
          <Button
            variant="outline-primary"
            size="sm"
            className="float-end m-2"
            onClick={() => window.open(recipe.strYoutube, "_blank")}
          >
            Watch Video
          </Button>
        ) : (
          ""
        )}
        <ToggleButton
          type="checkbox"
          size="sm"
          checked={fav}
          variant="outline-danger"
          className="float-end m-2"
          id="toggle-check"
          value="1"
          onChange={onFavHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
          </svg>
          &nbsp;Favorite
        </ToggleButton>
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
