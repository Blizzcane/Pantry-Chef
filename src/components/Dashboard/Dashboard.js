import React, { useEffect, useState } from "react";
import Profile from "../Profile";
import InventoryView from "./InventoryView";
import RecipeView from "./RecipeView";
import axios from "axios";

//need to find a cheaper API

const Dashboard = ({ pantry }) => {
  return (
    <>
      <Profile />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <h3 className="">Recipes</h3>
            <RecipeView pantry={pantry} itemsPerPage={6} />
          </div>

          <div className="col">
            <h3>Inventory</h3>
            <InventoryView pantry={pantry} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
