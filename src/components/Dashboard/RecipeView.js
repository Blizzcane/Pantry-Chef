import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Pagination";

const RecipeView = ({ pantry, itemsPerPage }) => {
  const [recipes, setRecipes] = useState([]);
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

  useEffect(() => {
    pantry.forEach((item) => {
      axios(url + item.strIngredient)
        .then((response) =>
          setRecipes((prev) => [...prev, ...response.data.meals])
        )
        .catch((err) => console.log(err));
    });
  }, [pantry]);

  if (recipes.length === 0) return <p>No items in inventory</p>;

  return (
    <Pagination
      itemsPerPage={itemsPerPage}
      items={recipes}
      ulClass="list-group-item list-group-item-action"
      viewList={false}
    />
  );
};

export default RecipeView;
