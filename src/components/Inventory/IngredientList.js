import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import "./IngredientList.css";

//this component will render a filtered list of ingredients
const IngredientList = ({ ingredients, onAddHandler }) => {
  const [filter, setFilter] = useState("");

  return (
    <div className="flexItem">
      <p>
        Type to filter the list:
        <input
          className="form-control shadow-sm"
          id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={({ target }) => setFilter(target.value)}
        />
      </p>
      <ListGroup >
        {ingredients
          .filter(
            (item) =>
              item.strIngredient.toLowerCase().includes(filter) || filter === ""
          ) 
          .map((item) => (
            <ListGroup.Item
              className="list-group-item list-group-item-action"
              key={item.idIngredient}
              role="button"
              title="Add ingredient"
              onClick={() => {
                onAddHandler(item);
              }}
            >
              {item.strIngredient}
            </ListGroup.Item>
          ))}
      </ListGroup >
    </div>
  );
};

export default IngredientList;
