// Server API

//getting info from dotenv file 
require('dotenv').config();

const axios = require('axios');
const app = require('express')(); 
const cors = require('cors'); // security protocol that prevents applications from different ports to access your info. 
const morgan = require('morgan'); // Logs HTTP requests to the console

// Getting API key from the environment variables
const apiKey = process.env.API_KEY;


// setting up a port for the backend 
// we will need 2 servers running, one for backend and one for frontend
const PORT = 8080; 

// ===== MIDDLEWARE SETUP =====
app.use(morgan('dev')); 
app.use(cors());


// ===== API ROUTES =====
// Route to fetch recipes based on user-provided ingredients 
app.get('/api/recipes', async (req, res) => {
  // Get the 'ingredients' query parameter from the frontend request
  const ingredients = req.query.ingredients;

   // If no ingredients were provided, return a 400 (Bad Request) error
  if(!ingredients) {
    return res.status(400).json({ error: 'Ingredients are required' });
  }

  try {
    // Make a request to the Spoonacular API with the provided ingredients
    const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
      params: {
        ingredients: ingredients, // ingredients passed from frontend
        number: 2, // Number of recipes to fetch
        apiKey: apiKey // API key from environment
      }
    });

    // Return the Spoonacular response data (recipes) back to the frontend
    res.json(response.data);

    // If an error occurs (e.g., bad API key, network issue), log and respond with 500
  } catch (error) {
    console.error('Error fetching from Spoonacular:', error.message);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }

});



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))



