ServerEvents.recipes(event => {
    let count = 0
    
    event.forEachRecipe({}, recipe => {
        count++
        // Prints the recipe ID and its entire JSON structure to logs/kubejs/server.log
        console.info(`Recipe #${count}: ${recipe.getId()} -> ${recipe.toJson()}`)
    })
    
    console.info(`Successfully listed ${count} total recipes.`)
})
