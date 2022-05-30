import React from 'react'

const ListItems = ({ currentItems, ulClass, liClass }) => {
    return (
      <ul className={ulClass}>
        {currentItems.map((item, idx) => (
          <li className={liClass} key={item + idx}>
            {item[0]}
          </li>
        ))}
      </ul>
    );
  };

export default ListItems