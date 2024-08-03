// src/RecipeBook.js
import React, { useState } from "react";
import RecipeList from "./RecipeList";
import RecipeInformation from "./RecipeInformation";

const recipes = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    author: "John Doe",
    image: "favicon.png",
    ingredients: [
      "spaghetti",
      "ground beef",
      "tomato sauce",
      "onion",
      "garlic",
    ],
  },
  {
    id: 2,
    name: "Chicken Curry",
    author: "Jane Smith",
    image: "favicon.png",
    ingredients: ["chicken", "curry powder", "coconut milk", "onion", "garlic"],
  },
  // Add more recipes as needed
];

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="recipe-book">
      <RecipeList
        recipes={recipes}
        onRecipeSelect={setSelectedRecipe}
        selectedRecipe={selectedRecipe}
      />
      <div className="recipe-details">
        {selectedRecipe ? (
          <RecipeInformation recipe={selectedRecipe} />
        ) : (
          <p>Please select a recipe from the list.</p>
        )}
      </div>
    </div>
  );
};

export default Recipes;
