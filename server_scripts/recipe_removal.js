// As an alternative to manually disabling recipes via datapacks

ServerEvents.recipes(event => {
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
    "scguns:macerator",
    "scguns:powered_macerator",
    "scguns:polar_generator",
    "scguns:mechanical_press",
    "scguns:powered_mechanical_press",
    "scguns:jetpack_module",
    "scguns:night_vision_module",
    "scguns:target_tracker_module",
    "scguns:rebreather_module",
    "scguns:rabbit_module",
    "scguns:suit_grease",
    "scguns:tension_spring",
    "scguns:exo_suit_helmet",
    "scguns:exo_suit_chestplate",
    "scguns:exo_suit_leggings",
    "scguns:exo_suit_boots",
    "scguns:exo_suit_core",
    "scguns:advanced_exo_suit_core",
    "scguns:air_canister",
    "scguns:reinforced_air_canister",
    "scguns:armor_plate",
    "scguns:heavy_armor_plate",
    "scguns:pauldron",
    "scguns:heavy_pauldron",
    "scguns:armor_pouches",
    "scguns:heavy_armor_pouches",
    "dragnlivestock:pride_medieval_blanket",
    "dragnlivestock:pride_modern_blanket",
    "dragnlivestock:pride_racing_blanket",
    "dragnlivestock:pride_western_blanket",
    "dragnlivestock:lesbian_medieval_blanket",
    "dragnlivestock:lesbian_modern_blanket",
    "dragnlivestock:lesbian_racing_blanket",
    "dragnlivestock:lesbian_western_blanket",
    "dragnlivestock:bi_medieval_blanket",
    "dragnlivestock:bi_modern_blanket",
    "dragnlivestock:bi_racing_blanket",
    "dragnlivestock:bi_western_blanket",
    "dragnlivestock:nonbinary_medieval_blanket",
    "dragnlivestock:nonbinary_modern_blanket",
    "dragnlivestock:nonbinary_racing_blanket",
    "dragnlivestock:nonbinary_western_blanket",
    "dragnlivestock:trans_medieval_blanket",
    "dragnlivestock:trans_modern_blanket",
    "dragnlivestock:trans_racing_blanket",
    "dragnlivestock:trans_western_blanket",
    "backpacked:oak_backpack_shelf",
    "backpacked:spruce_backpack_shelf",
    "backpacked:birch_backpack_shelf",
    "backpacked:jungle_backpack_shelf",
    "backpacked:dark_oak_backpack_shelf",
    "backpacked:acacia_backpack_shelf",
    "backpacked:crimson_backpack_shelf",
    "backpacked:warped_backpack_shelf",
    "backpacked:cherry_backpack_shelf",
    "wyrmroost:blue_geode",
    "wyrmroost:red_geode",
    "wyrmroost:purple_geode",
    "wyrmroost:blue_geode_sword",
    "wyrmroost:blue_geode_pickaxe",
    "wyrmroost:blue_geode_axe",
    "wyrmroost:blue_geode_shovel",
    "wyrmroost:blue_geode_hoe",
    "wyrmroost:blue_geode_helmet",
    "wyrmroost:blue_geode_chestplate",
    "wyrmroost:blue_geode_leggings",
    "wyrmroost:blue_geode_boots",
    "wyrmroost:blue_geode_tipped_arrow",
    "wyrmroost:red_geode_sword",
    "wyrmroost:red_geode_pickaxe",
    "wyrmroost:red_geode_axe",
    "wyrmroost:red_geode_shovel",
    "wyrmroost:red_geode_hoe",
    "wyrmroost:red_geode_helmet",
    "wyrmroost:red_geode_chestplate",
    "wyrmroost:red_geode_leggings",
    "wyrmroost:red_geode_boots",
    "wyrmroost:red_geode_tipped_arrow",
    "wyrmroost:purple_geode_sword",
    "wyrmroost:purple_geode_pickaxe",
    "wyrmroost:purple_geode_axe",
    "wyrmroost:purple_geode_shovel",
    "wyrmroost:purple_geode_hoe",
    "wyrmroost:purple_geode_helmet",
    "wyrmroost:purple_geode_chestplate",
    "wyrmroost:purple_geode_leggings",
    "wyrmroost:purple_geode_boots",
    "wyrmroost:purple_geode_tipped_arrow",
    "wyrmroost:blue_geode_dragon_armor",
    "wyrmroost:red_geode_dragon_armor",
    "wyrmroost:purple_geode_dragon_armor",
    "wyrmroost:blue_geode_block",
    "wyrmroost:red_geode_block",
    "wyrmroost:purple_geode_block",
    "wyrmroost:jewelled_apple",
  ];
  removeByOutput.forEach((item) => {
    event.remove({ output: item });
  });

  // for specific recipes that are being disabled
  //const removeById = [
  //  "infernalexp:shroombright_from_tears",
  //  "infernalexp:shroomblight_from_tears",
  //];
  //removeById.forEach((item) => {
  //  event.remove({ id: item });
  //});

  // metal smelting recipes
  const removeBySmelting = [
    "minecraft:iron_ingot",
    "minecraft:copper_ingot",
    "minecraft:gold_ingot",
    "create:zinc_ingot",
    "kubejs:nickel_ingot",
    "kubejs:aluminum_ingot",
    "oreganized:silver_ingot",
    "oreganized:lead_ingot",
    "tinkers_reforged:yttrium_ingot",
    "tinkers_reforged:barium_ingot",
    "tinkers_reforged:thallium_ingot",
    "tconstruct:cobalt_ingot",
    "betterend:thallasium_ingot",
    "caverns_and_chasms:tin_ingot",
    "scguns:anthralite_ingot",
    "scguns_oregunized:mauvite_ingot",
    "wyrmroost:blue_geode",
    "wyrmroost:red_geode",
    "wyrmroost:purple_geode",
  ]
  removeBySmelting.forEach((item) => {
    event.remove([{ type: 'minecraft:smelting', output: item }, { type: 'minecraft:blasting', output: item }]);
  });

  // Scorched Guns 2 special stations (we use Create)
  event.remove({ type: 'scguns:macerating' })
  event.remove({ type: 'scguns:powered_macerating' })
  event.remove({ type: 'scguns:mechanical_pressing' })
  event.remove({ type: 'scguns:powered_mechanical_pressing' })
});

// broken mod adds some bad items to tags, try to fix them!
ServerEvents.tags('block', event => {
  event.remove('create:non_movable', 'unusual_furniture:industrial_bench')
  event.remove('create:seats', 'unusual_furniture:industrial_bench')
  event.remove('scguns:fragile', 'scguns_oregunized:luxurious_vase')
  event.remove('forge:sit_tag', 'unusual_furniture:industrial_bench')
  event.remove('forge:rabbit_hutches', 'dragnlivestock:spruce_rabbit_hutch')
})

ServerEvents.tags('item', event => {
  event.remove('forge:plates', 'tinkers_reforged:graphite_plate')
  event.remove('minecraft:trim_materials', 'caverns_and_chasms:silver_ingot')

  event.remove('alexscaves:gingerbread_man_steals', 'snowyspirit:eggnog')
  event.remove('c:tools/melee_weapon', 'minecraft:mace')
  event.remove('c:tools/mace', 'minecraft:mace')
  event.remove('c:rods/breeze', 'minecraft:breeze_rod')
  event.remove('c:foods', 'minecraft:ominous_bottle')
  event.remove('c:music_discs', 'minecraft:music_disc_creator')
  event.remove('c:music_discs', 'minecraft:music_disc_creator_music_box')
  event.remove('c:music_discs', 'minecraft:music_disc_precipice')
  event.remove('scguns:grenades', 'scguns_oregunized:esd_grenade')
  event.remove('forge:heads', 'inhabitants:impaler_head_wall')
  event.remove('forge:heads', 'inhabitants:impaler_head_wall_dripstone')
  event.remove('forge:heads', 'inhabitants:impaler_head_wall_albino')
  event.remove('forge:heads', 'inhabitants:impaler_head_wall_forlorn_hollows')
  event.remove('unusual_furniture:card', 'create_furniture:blank_ticket')
  event.remove('create_new_age:nuclear/fuel', 'create_new_age:nuclear_fuel')
  event.remove('create_new_age:energy_28800', 'create_new_age:nuclear_fuel')

  event.remove('forge:raw_meat', 'farmersdelight:chicken_cuts')
  event.remove('forge:raw_meat', 'farmersdelight:mutton_chops')
  event.remove('forge:raw_chicken', 'farmersdelight:chicken_cuts')
  event.remove('forge:raw_mutton', 'farmersdelight:mutton_chops')
  event.remove('forge:cooked_mutton', 'farmersdelight:cooked_mutton_chops')
  event.remove('forge:cooked_chicken', 'farmersdelight:cooked_chicken_cuts')

  event.remove('forge:gems', 'wyrmroost:blue_geode')
  event.remove('forge:gems', 'wyrmroost:red_geode')
  event.remove('forge:gems', 'wyrmroost:purple_geode')
})
