import React  from "react"; 
import Pagination from "./Pagination/Pagination";

const RecipeView = ({ recipes, itemsPerPage }) => {
 
  if (recipes.length === 0) return <p>No items in inventory</p>;

  return (
    <Pagination
      itemsPerPage={itemsPerPage}
      items={recipes}
      ulClass="list-group-item list-group-item-action"
      viewList={false}
    />
  );
};

export default RecipeView;
