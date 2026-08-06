// priority: 0

// Requires LootJS

LootJS.modifiers((event) => {
    event
        .addLootTableModifier("lost_aether_content:chests/platinum_treasure_loot")
        .addLoot("kubejs:soul_of_flight");

    event
        .addLootTableModifier("aether:chests/dungeon/silver/silver_dungeon_treasure")
        .addLoot("kubejs:soul_of_flight");

    event.addLootTableModifier(/the_bumblezone:archaeology\/.*/).removeLoot("minecraft:sniffer_egg");

    event.addLootTableModifier("scguns:entities/viventrum").removeLoot("scguns:night_vision_module");
    event.addLootTableModifier("scguns:entities/scamp_tank").removeLoot("scguns:exo_suit_blueprint");

    event
        .addLootTableModifier("minecraft:entities/wither")
        .addLoot(LootEntry.of('kubejs:wither_ashes').limitCount([16, 24]))
});
