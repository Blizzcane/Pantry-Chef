import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RecipeDetails = () => {
  let navigate = useNavigate();
  let { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);
 

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      );
      const data = await response.json();
      setRecipe(data.meals[0]);
      console.log(recipe);
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [recipeId]);

  return (
      <div> 
          <h1>{recipe.strMeal}</h1>
      <button onClick={() => navigate("/dashboard")}>Go back</button>
    </div>
  );
};

export default RecipeDetails;
