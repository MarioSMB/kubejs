ServerEvents.recipes(event => {
    let itemList = [];

    event.forEachRecipe({}, recipe => {
        let type = String(recipe.getType()); 
        
        if (type === 'create:sandpaper_polishing' || type.includes('sandpaper')) {
            try {
                // Safely grab the raw JSON results from the recipe
                let json = recipe.getJson();
                if (json && json.has('results')) {
                    let resultsArray = json.get('results').getAsJsonArray();
                    resultsArray.forEach(element => {
                        if (element.isJsonObject() && element.getAsJsonObject().has('item')) {
                            let itemId = String(element.getAsJsonObject().get('item').getAsString());
                            if (!itemList.includes(itemId)) {
                                itemList.push(itemId);
                            }
                        }
                    });
                }
            } catch (err) {
                // Ignore silent parsing issues
            }
        }
    });

    itemList.sort();

    // PRINT DIRECTLY TO THE LOGS
    console.log("=========================================");
    console.log(`[KubeJS] SANDPAPER ITEMS FOUND (${itemList.length}):`);
    console.log("=========================================");
    
    // Print each item on a brand new line
    itemList.forEach(item => {
        console.log(`OUTPUT_ITEM: ${item}`);
    });
    
    console.log("=========================================");
});
