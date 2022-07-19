import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import axios from "axios";
import useFetch from "./utils/useFetch";
import Header from "./components/Header";
import Inventory from "./components/Inventory/index";
import Dashboard from "./components/Dashboard/index";
import Loading from "./components/Loading";
import Recipes from "./components/Recipes/index";
import RecipeDetails from "./components/Recipes/RecipeDetails";
import Footer from "./components/Footer";

const App = () => {
  const { isLoading } = useAuth0();
  const [pantry, setPantry] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]); //stores user's favorite recipes
  const navigate = useNavigate();

  //add useReducer for state management

  //initial load of ingredients from TheMealDB
  const [ingredients, ingredientsError] = useFetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  const recipeUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

  useEffect(() => {
    setRecipes([]);
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
  const onFavUpdate = (id, action) => {
    switch (action) {
      case "add":
        setFavorites((prev) => [...new Set([...prev, id])]);
        break;
      case "remove":
        let newFavs = favorites.filter((favId) => favId !== id);
        setFavorites(() => newFavs);
        break;
      default:
        break;
    }
    console.log("favorites:",favorites)
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
        <Route
          path="/recipe-details"
          element={<RecipeDetails favorites={favorites} onFavUpdate={onFavUpdate} />}
        >
          <Route
            path=":recipeId"
            element={<RecipeDetails favorites={favorites} onFavUpdate={onFavUpdate} />}
          />
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
      {/* <Footer /> */}
    </div>
  );
};

export default App;
