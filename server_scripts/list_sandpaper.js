ServerEvents.recipes(event => {
    let itemList = [];

    // Loop through absolutely every recipe loaded in the game
    event.forEachRecipe({}, recipe => {
        let type = String(recipe.getType()); // Force convert to string to ensure matching
        
        // 1.20.1 Registry check for Create's sandpaper polishing
        if (type === 'create:sandpaper_polishing') {
            
            // Fetch outputs compatible with 1.20.1 architecture
            let outputs = recipe.getOutputs();
            
            outputs.forEach(output => {
                let outputId = String(output.getId());
                
                // Keep the list unique and clean
                if (!itemList.includes(outputId) && outputId !== 'minecraft:air') {
                    itemList.push(outputId);
                }
            });
        }
    });

    // Alphabetical sort for neat reading
    itemList.sort();

    // Safely write the file into your Minecraft instance's kubejs/output/ directory
    JsonIO.write('kubejs/output/create_sandpaper_polishing.txt', itemList.join('\n'));
    
    console.log(`--- [KubeJS] Successfully dumped ${itemList.length} Sandpaper Polishing items! ---`);
});
