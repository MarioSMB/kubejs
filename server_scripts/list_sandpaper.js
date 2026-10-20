ServerEvents.recipes(event => {
    let itemList = [];

    // Loop through every recipe in the game
    event.forEachRecipe({}, recipe => {
        let type = recipe.getType();
        
        // Catch all variations of Create's sandpaper polishing type
        if (type == 'create:sandpaper_polishing' || type == 'create:sandpaper') {
            let outputItem = recipe.getOriginalRecipeResult().getId();
            
            if (!itemList.includes(outputItem)) {
                itemList.push(outputItem);
            }
        }
    });

    itemList.sort();

    // Outputs specifically to its own sandpaper file
    JsonIO.write('kubejs/output/create_sandpaper_polishing.txt', itemList.join('\n'));
    console.log("--- Successfully exported Create Sandpaper Polishing items! ---");
});
