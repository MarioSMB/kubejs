// priority: 0

// Requires LootJS

LootJS.modifiers((event) => {
    event
        .addLootTableModifier("minecraft:chests/nether_bridge")
        .addLoot("kubejs:platinum_ingot");
});

ServerEvents.tags('item', event => {
    // Get the #misc:blah tag collection and remove Junk from it
    event.remove('minecraft:beacon_payment_items', 'aether:enchanted_gravitite')

    event.remove('forge:ingots', 'darkerdepths:forsaken_bronze_ingot')
})
