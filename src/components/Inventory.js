import React, { useState } from "react";

const Inventory = ({ ingredients }) => {
  const [filter, setFilter] = useState("");
  const [inventory, setInventory] = useState([]);

  const onAddHandler = (item) => {
    const set = new Set(inventory); //helps avoid duplicate entries
    set.add(item);
    setInventory(() => [...set]);
  };

  const onRemoveHandler = (item) => {
    const removedArr = inventory.filter(ingredient=>item !== ingredient)
    setInventory(() => removedArr);
  };

  return (
    <div> 
      <div>
        <ul className="list-group">
          {inventory.map((item) => (
            <a
              href="#"
              className="list-group-item list-group-item-action"
              key={item[1]}
              onClick={() => {
                onRemoveHandler(item);
              }}
            >
              {item[0]}
            </a>
          ))}
        </ul>
      </div>

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
    </div>
  );
};

export default Inventory;
