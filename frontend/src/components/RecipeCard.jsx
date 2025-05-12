import React from "react";
import '../App.css';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <div>
        <a target="_blank" rel="noopener noreferrer" href={recipe?.sourceUrl}>
          <strong>{recipe?.title}</strong>
        </a>
      </div>
      <div className="recipe-content">
        {/* Image */}
        <img src={recipe?.image} alt={recipe?.title} />

        {/* Ingredients */}
        {recipe?.usedIngredients?.length > 0 && (
          <div className="ingredients">
            <strong>Ingredients From Search:</strong>
            <ul>
              {recipe.usedIngredients.map((ingredient, i) => (
                <li key={i}>{ingredient.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;