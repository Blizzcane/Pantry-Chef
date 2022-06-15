import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import useFetch from "./utils/useFetch";
import Header from "./components/Header";
import Inventory from "./components/Inventory/index";
import "./App.css";
import Dashboard from "./components/Dashboard/index";
import Loading from "./components/Loading";
import Recipes from "./components/Recipes/index";
import RecipeDetails from "./components/Recipes/RecipeDetails";
import Footer from "./components/Footer";
import { Prev } from "react-bootstrap/esm/PageItem";

const App = () => {
  const { isLoading } = useAuth0();
  const [pantry, setPantry] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  //initial load of ingredients from TheMealDB
  const [ingredients, ingredientsError] = useFetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  const recipeUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

  useEffect(() => {
    if (pantry.length == 0) setRecipes([]);
    pantry.forEach((item) => {
      axios(recipeUrl + item.strIngredient)
        .then((response) =>
          setRecipes((prev) => [...prev, ...response.data.meals])
        )
        .catch((err) => console.log(err));
    });
  }, [pantry]);

  const onUpdatePantry = (newItems) => {
    setPantry(newItems);
    navigate("/dashboard");
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
              pantry={pantry}
            />
          }
        />
        <Route path="/recipe-details" element={<RecipeDetails />}>
          <Route path=":recipeId" element={<RecipeDetails />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
