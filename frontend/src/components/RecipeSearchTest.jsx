import React, { useState } from "react";

const RecipeSearchTest = () => {

  const [inputValue, setInputValue] = useState(''); // Store user input
  const [recipes, setRecipes] = useState([]); 
  const [error, setError] = useState('');



  const handleSubmit = async (event) => {
    event.preventDefault(); // stop the page from refreshing

    const ingredientsString = inputValue; 
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

  return (
    <div>
   
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-sm mx-auto mt-10"> 
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Enter ingredients (comma separated)"
          className="p-3 border border-gray-300 rounded-md shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <br/>
        <button type="submit" className="p-3 bg-blue-500 rounded-md hover:bg-blue-600 transition">Search</button>

      </form>

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
