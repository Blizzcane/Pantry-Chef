import React from 'react'
import { Button, Card, Collapse } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RecipePopUp = ({recipe,open}) => {
  return (
    <aside style={{ minHeight: "100vh" }}>
        <Collapse in={open} dimension="width">
          <div id="recipe-details">
            <Card style={{ width: "18rem" }} >
              <Card.Img variant="top" src={recipe?.strMealThumb} />
              <Card.Body>
                <Card.Title>{recipe?.strMeal}</Card.Title> 
                <Link to={`/recipe-details/${recipe?.idMeal}`}>
                  <Button variant="primary">View Full Recipe</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Collapse>
      </aside>
  )
}

export default RecipePopUp