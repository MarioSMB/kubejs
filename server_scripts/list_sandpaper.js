ServerEvents.recipes(event => {
  event.forEachRecipe(recipe => {
    // Access recipe properties
    console.info(recipe.getId()) // Prints the recipe ID
    console.info(recipe.getOriginalRecipeIngredients()) // Prints ingredients
  })
})
