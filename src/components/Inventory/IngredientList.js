import React, { useState } from "react";


//this component will render a filtered list of ingredients  
const IngredientList = ({ ingredients, onAddHandler }) => {
  const [filter, setFilter] = useState("");
  return (
    <>
      <p>
        Type to filter the list:
        <input
          id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={({ target }) => setFilter(target.value)}
        />
      </p>
      <ul className="list-group">
        {ingredients
          .filter((item) => item[0].includes(filter) || filter === "")
          .map((item) => (
            <a
              href="#"
              className="list-group-item list-group-item-action"
              key={item[1]}
              onClick={() => {
                onAddHandler(item);
              }}
            >
              {item[0]}
            </a>
          ))}
      </ul>
    </>
  );
};

export default IngredientList;
