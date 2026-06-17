ServerEvents.recipes((e) => {
  // for items that "removed", disable any recipes that create them
  const removeByOutput = [
    "tinkers_reforged:slimebronze_gear",
    "tinkers_reforged:graphite_gear",
    "tinkers_reforged:yttrium_gear",
    "tinkers_reforged:astatine_gear",
    "tinkers_reforged:barium_gear",
    "tinkers_reforged:tellurium_gear",
    "tinkers_reforged:actinium_gear",
    "tinkers_reforged:thallium_gear",
    "tinkers_reforged:germanium_gear",
    "tinkers_reforged:berkelium_gear",
    "tinkers_reforged:graphite_plate",
    "createmetallurgy:gold_dust",
    "createmetallurgy:iron_dust",
    "createmetallurgy:copper_dust",
    "createmetallurgy:zinc_dust",
    "createmetallurgy:tungsten_dust",
    "createmetallurgy:faucet",
    "eeeabsmobs:immortal_block",
    "eeeabsmobs:immortal_ingot",
    "eeeabsmobs:ghost_warrior_upgrade_smithing_template",
    "eeeabsmobs:ghost_warrior_helmet",
    "eeeabsmobs:ghost_warrior_chestplate",
    "eeeabsmobs:ghost_warrior_leggings",
    "eeeabsmobs:ghost_warrior_boots",
    "eeeabsmobs:ghost_steel_block",
    "eeeabsmobs:cut_ghost_steel",
    "eeeabsmobs:cut_ghost_steel_stairs",
    "eeeabsmobs:cut_ghost_steel_slab",
    "eeeabsmobs:ghost_steel_ingot",
    "betterend:mossy_glowshroom_crafting_table",
    "betterend:mossy_glowshroom_bookshelf",
    "betterend:pythadendron_crafting_table",
    "betterend:pythadendron_bookshelf",
    "betterend:end_lotus_crafting_table",
    "betterend:end_lotus_bookshelf",
    "betterend:lacugrove_crafting_table",
    "betterend:lacugrove_bookshelf",
    "betterend:dragon_tree_crafting_table",
    "betterend:dragon_tree_bookshelf",
    "betterend:tenanea_crafting_table",
    "betterend:tenanea_bookshelf",
    "betterend:helix_tree_crafting_table",
    "betterend:helix_tree_bookshelf",
    "betterend:umbrella_tree_crafting_table",
    "betterend:umbrella_tree_bookshelf",
    "betterend:jellyshroom_crafting_table",
    "betterend:jellyshroom_bookshelf",
    "betterend:lucernia_crafting_table",
    "betterend:lucernia_bookshelf",
    "windswept:chestnut_bookshelf",
    "windswept:holly_bookshelf",
    "windswept:pine_bookshelf",
    "darkerdepths:petrified_bookshelf",
    "spore:amalgamated_roast",
    "spore:eldritch_sushi",
    "spore:stuffed_abomination",
    "spore:brain_noodles",
    "spore:vigil_soup",
    "spore:organoid_soup",
    "spore:fungal_sauce",
    "spore:fungal_burger",
    "spore:heart_pie",
    "spore:heart_pie_pieces",
    "spore:milky_sacks",
    "spore:fried_wing_membrane",
    "spore:roasted_tumor",
    "spore:heart_kebab",
    "spore:roasted_heart_kebab",
    "spore:fiber_stew",
    "spore:maul",
    "spore:combat_shovel",
  ];
  // for specific recipes that are being disabled
  //const removeById = [
  //  "minecraft:sugar_from_sugar_cane",
  //];
  //removeById.forEach((item) => {
  //  e.remove({ id: item });
  //});
  removeByOutput.forEach((item) => {
    e.remove({ output: item });
  });

  // metal smelting recipes
  const removeBySmelting = [
    "minecraft:iron_ingot",
    "minecraft:copper_ingot",
    "minecraft:gold_ingot",
    "create:zinc_ingot",
    "kubejs:nickel_ingot",
    "kubejs:aluminum_ingot",
    "oreganized:silver_ingot",
    "tinkers_reforged:yttrium_ingot",
    "tinkers_reforged:barium_ingot",
    "tinkers_reforged:thallium_ingot",
    "tconstruct:cobalt_ingot",
    "betterend:thallasium_ingot",
    "caverns_and_chasms:tin_ingot",
  ]
  removeBySmelting.forEach((item) => {
    e.remove([{ type: 'minecraft:smelting', output: item }, { type: 'minecraft:blasting', output: item }]);
  });
});

// broken mod adds some bad items to tags, try to fix them!
ServerEvents.tags('block', event => {
  event.remove('create:non_movable', 'unusual_furniture:industrial_bench')
  event.remove('create:seats', 'unusual_furniture:industrial_bench')
})

ServerEvents.tags('item', event => {
  event.remove('forge:plates', 'tinkers_reforged:graphite_plate')

  event.remove('forge:raw_meat', 'farmersdelight:chicken_cuts')
  event.remove('forge:raw_meat', 'farmersdelight:mutton_chops')
  event.remove('forge:raw_chicken', 'farmersdelight:chicken_cuts')
  event.remove('forge:raw_mutton', 'farmersdelight:mutton_chops')
  event.remove('forge:cooked_mutton', 'farmersdelight:cooked_mutton_chops')
  event.remove('forge:cooked_chicken', 'farmersdelight:cooked_chicken_cuts')
})
