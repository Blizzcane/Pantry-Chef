import React, { useEffect, useState } from "react";
import Profile from "../Profile";
import InventoryView from "./InventoryView";
import RecipeView from "./RecipeView";
import axios from "axios";
import { useNavigate } from "react-router-dom";


//need to find a cheaper API

const Dashboard = ({ pantry, recipes }) => {
  let navigate = useNavigate();

  return (
    <>
      <Profile />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <h3>Recipes</h3>
            <RecipeView recipes={recipes} itemsPerPage={8} />
          </div>

          <div className="col-3">
            <h3>Inventory</h3>
            <InventoryView pantry={pantry} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
