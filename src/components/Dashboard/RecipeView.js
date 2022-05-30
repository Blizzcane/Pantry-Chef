import React from 'react'
import Pagination from '../Pagination';

const RecipeView = ({pantry}) => {
    if (pantry.length === 0) return <p>No items in inventory</p>;

    return (
      <Pagination
        itemsPerPage={10}
        items={pantry} 
        ulClass="list-group-item list-group-item-action"
        viewList={false}
      />
    );
}

export default RecipeView