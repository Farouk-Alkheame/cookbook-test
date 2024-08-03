export default function RecipeItem({ recipe, onRecipeSelect, selectedRecipe }) {
  return (
    <li
      key={recipe.id}
      className={`recipe-item ${
        selectedRecipe?.id === recipe.id ? "active" : ""
      }`}
      onClick={() => onRecipeSelect(recipe)}
    >
      {recipe.name}
    </li>
  );
}
