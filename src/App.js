import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Header from "./components/Header";
import Inventory from "./components/Inventory/Inventory"; 
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Loading from "./components/Loading"; 
import Recipes from "./components/Recipes/Recipes";

const App = () => {
  const { isLoading } = useAuth0();
  const [ingredients, setIngredients] = useState([]);
  const [pantry, setPantry] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const ingredientUrl =
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
  const recipeUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

  //initial load of ingredients from TheMealDB
  useEffect(() => {
    axios(ingredientUrl)
      .then((response) => setIngredients(response.data.meals))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    pantry.forEach((item) => {
      axios(recipeUrl + item.strIngredient)
        .then((response) =>
          setRecipes((prev) => [...prev, ...response.data.meals])
        )
        .catch((err) => console.log(err));
    });
  }, [pantry]);

  const onUpdatePantry = (newItems) => {
    setPantry(() => [...new Set([...pantry, ...newItems])]);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Dashboard pantry={pantry} recipes={recipes} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard pantry={pantry} recipes={recipes} />}
        />
        <Route path="/recipes" element={<Recipes recipes={recipes} />} />
        <Route
          path="inventory"
          element={
            <Inventory
              onUpdatePantry={onUpdatePantry}
              ingredients={ingredients}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
