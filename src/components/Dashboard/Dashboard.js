import React from "react";
import Profile from "../Profile"; 
import InventoryView from "./InventoryView";


const Dashboard = ({ pantry }) => {
  return (
    <>
      <Profile />
      <div className="d-flex flex-row bd-highlight mb-3 justify-content-evenly">
        <div className="">
          <h3 className="">Recipes</h3>
        </div>

        <div className="">
          <h3>Inventory</h3>
          <InventoryView   pantry={pantry} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
