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
import ProtectedRoute from './auth/protected-route';

const App = () => {
  const { isLoading } = useAuth0();
  const [ingredients, setIngredients] = useState([]);
  const [pantry, setPantry] = useState([]);
  useEffect(() => {
    setIngredients(ingredientData);
  }, []);

  const onUpdatePantry = (newItems) => {
    setPantry(() => [...new Set([...pantry, ...newItems])]);
  };

  if (isLoading) {
    return <Loading/>;
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <ProtectedRoute  path="/dashboard" component={<Dashboard pantry={pantry} />} />
        <ProtectedRoute
          path="inventory"
          component={
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
