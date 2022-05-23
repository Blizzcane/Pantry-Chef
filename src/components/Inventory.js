import React, { useState } from "react";

const Inventory = ({ ingredients }) => {
  const [filter, setFilter] = useState("");
  const [inventory, setInventory] = useState([]);

  const onAddHandler = (item) => {
    setInventory((prevInv)=> [...prevInv,item])
  };

  return (
    <div>
      <div>
        <ul className="list-group">
          {inventory.map((item) => (
            <li
              className="list-group-item list-group-item-action"
              key={item[1]} 
            >
              {item[0]}
            </li>
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
              onClick={()=>{onAddHandler(item)}}
            >
              {item[0]}
            </a>
          ))}
      </ul>
    </div>
  );
};

export default Inventory;
