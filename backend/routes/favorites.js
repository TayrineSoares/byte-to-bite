const express = require('express');
const router = express.Router();
const { saveRecipeForUser } = require('../db/database');

router.post('/save-recipe', async (req, res) => {

  try {

    // Use user_id = 1 for testing (coming from the seeds).
    // After we add authentication, replace the hardcoded 1 with the logged-in user’s ID.
    const userId = 1; 
    const savedRecipe = req.body;  // Full recipe object from frontend

    console.log('Saving recipe for user:', userId);
    console.log('Recipe data:', savedRecipe);
    
    const saved = await saveRecipeForUser(userId, savedRecipe);
    res.json(saved);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save recipe' });
  }
});

module.exports = router;
