import RecipeItem from "./RecipeItem";

export default function RecipeList({
  recipes,
  onRecipeSelect,
  selectedRecipe,
}) {
  return (
    <div className="recipe-list">
      <ul>
        {recipes.map((recipe) => (
          <RecipeItem
            recipe={recipe}
            onRecipeSelect={onRecipeSelect}
            selectedRecipe={selectedRecipe}
            key={recipe.id}
          />
        ))}
      </ul>
    </div>
  );
}
