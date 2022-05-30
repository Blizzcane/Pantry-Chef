import React from 'react'
import Pagination from '../Pagination';

const RecipeView = ({recipes}) => {
    if (recipes.length === 0) return <p>No items in inventory</p>;

    return (
      <Pagination
        itemsPerPage={6}
        items={recipes} 
        ulClass="list-group-item list-group-item-action"
        viewList={false}
      />
    );
}

export default RecipeView