import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Inventory from "./components/Inventory/Inventory";
import ingredientData from "./data/top-1k-ingredients.json";
import "./App.css";

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [pantry, setPantry] = useState([]);
  useEffect(() => {
    setIngredients(ingredientData);
  }, []);

  const onUpdatePantry = (newItems) => {  
    setPantry(()=>[...new Set([...pantry,...newItems])]); 
  };

  return (
    <div className="App">
      <Header />
      {pantry}
      <Inventory onUpdatePantry={onUpdatePantry} ingredients={ingredients} />
    </div>
  );
};

export default App;
