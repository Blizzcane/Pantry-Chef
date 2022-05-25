import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Inventory from "./components/Inventory/Inventory";
import ingredientData from "./data/top-1k-ingredients.json";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [pantry, setPantry] = useState([]);
  useEffect(() => {
    setIngredients(ingredientData);
  }, []);

  const onUpdatePantry = (newItems) => {
    setPantry(() => [...new Set([...pantry, ...newItems])]);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
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
