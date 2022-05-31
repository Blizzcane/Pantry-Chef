import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Header from "./components/Header";
import Inventory from "./components/Inventory/Inventory";
import ingredientData from "./data/top-1k-ingredients.json";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Loading from "./components/Loading";

const App = () => {
  const { isLoading } = useAuth0();
  const [ingredients, setIngredients] = useState([]);
  const [pantry, setPantry] = useState([]);
  const url = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";

  useEffect(() => {
    axios(url)
      .then((response) => setIngredients(response.data.meals))
      .catch((err) => console.log(err)); 
  }, []);

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
        <Route path="/" element={<Dashboard pantry={pantry} />} />
        <Route path="/dashboard" element={<Dashboard pantry={pantry} />} />
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
