import React from 'react'

const ListItems = ({ currentItems, ulClass, liClass }) => {
    return (
      <ul className={ulClass}>
        {currentItems.map(({idIngredient,strIngredient}) => (
          <li className={liClass} key={idIngredient}>
            {strIngredient}
          </li>
        ))}
      </ul>
    );
  };

export default ListItems