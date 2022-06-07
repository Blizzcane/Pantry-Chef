import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeDetails = () => {
  let navigate = useNavigate();
  const handleClick = (event) => {
    event.target.preventDefault(); 
  };

  return (
    <div>
      <button onClick={()=>navigate("/dashboard")}>Go back</button>
    </div>
  );
};

export default RecipeDetails;
