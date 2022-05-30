import React from "react";
import Profile from "../Profile";
import "./Dashboard.css";

const Dashboard = ({ pantry }) => {
  return (
    <>
      <Profile />
      <div className="dashboard">
        <div>
          <h3>Recipes</h3>
        </div>

        <div>
          <h3>My Pantry</h3>
          <ul className="list-group">
            {pantry.map((item) => (
              <li className="list-group-item list-group-item-action">
                {item[0]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
