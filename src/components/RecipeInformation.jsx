export default function RecipeInformation({ recipe }) {
  return (
    <>
      <div className="recipe-information">
        <div className="title">
          <h2>{recipe.name}</h2>
          <p>
            <strong>Author:</strong> {recipe.author}
          </p>
        </div>
        <div className="ingredients">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.name} />
      </div>
    </>
  );
}
