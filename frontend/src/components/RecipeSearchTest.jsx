import React, { useState, useEffect } from "react";

const RecipeSearchTest = () => {

  const [recipes, setRecipes] = useState([]); 
  const [error, setError] = useState('');

  // Fake ingredients array to simulate user input
  const ingredients = ['eggs', 'bacon'];

  // Function to fetch recipes based on ingredients 
  const fetchRecipes = async () => {
    const ingredientsString = ingredients.join(','); 
    //console.log(ingredientsString);

    try {
      // Call the backend API with the ingredients
      const response = await fetch(`http://localhost:8080/api/recipes?ingredients=${ingredientsString}`)

      // Parse the JSON response from the backend
      const data = await response.json();

      console.log(data); // Log the data to see the fetched recipes
      setRecipes(data); // Set the fetched recipes into state
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setError('Failed to fetch recipes. Please try again.');
    }
  };

  // Trigger the API call when the component mounts 
  useEffect(() => {
    fetchRecipes();
  }, []); // Empty array means it runs only once when the component is mounted

  return (
    <div>

      {/* Display fetched recipes */}
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} style={{ width: '150px' }} />
          </li>
        ))}

      </ul>
      
    </div>
  )
};

export default RecipeSearchTest;
