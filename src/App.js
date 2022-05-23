import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Inventory from "./components/Inventory/Inventory";
import ingredientData from "./data/top-1k-ingredients.json";
import './App.css';

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    setIngredients(ingredientData);
  }, []);

  return (
    <div className="App">
      <Header />
      <Inventory ingredients={ingredients} />
    </div>
  );
};

export default App;
