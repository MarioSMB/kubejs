// priority: 0

StartupEvents.registry('item', e => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json

  // NOTE: these ores were split from their original mods for being overly large or MCreator based
  // this is no slight on the creators, just my efforts to trim the pack and improve performance!

  // Nickel by TeamCoFH https://www.curseforge.com/minecraft/mc-mods/thermal-foundation
  e.create('nickel_ingot')
  e.create('nickel_nugget')
  e.create('raw_nickel')

  // Aluminum by pablonm7 https://www.curseforge.com/minecraft/mc-mods/simplemetals-aluminum
  e.create('aluminum_ingot')
  e.create('aluminum_nugget')
  e.create('raw_aluminum').displayName('Bauxite')
  e.create('aluminum_sheet')

  // Tin by pablonm7 https://www.curseforge.com/minecraft/mc-mods/simplemetals-tin
  // NOTE: Caverns & Chasms now has tin ore, all but sheets have been deprecated
  e.create('tin_sheet')

  // Platinum by pablonm7 https://www.curseforge.com/minecraft/mc-mods/simplemetals-platinum
  e.create('platinum_ingot').tag("minecraft:beacon_payment_items")
  e.create('platinum_nugget')
  e.create('raw_platinum')

  // Gravitite primarily from Aether Redux https://www.curseforge.com/minecraft/mc-mods/aether-redux
  // Nugget modified from https://au.pinterest.com/pin/syrmorite-nugget--610237818282942809/
  e.create('gravitite_ingot').tag("minecraft:beacon_payment_items").rarity('RARE')
  e.create('gravitite_nugget').rarity('RARE')
  e.create('raw_gravitite')

  // Create: Metallurgy extended compatibility
  // commented out ones already exist in the base mod!
  function graphitemold(item) {
    e.create("graphite_" + item + "_mold").texture("kubejs:item/graphite_mold/" + item)
  }
  graphitemold('adze_head')
  graphitemold('arrow')
  //graphitemold('blank')
  graphitemold('boots_plating')
  graphitemold('bow_grip')
  graphitemold('bow_limb')
  //graphitemold('bowstring')
  graphitemold('broad_axe_head')
  graphitemold('broad_blade')
  graphitemold('chestplate_plating')
  // we don't have coins
  //graphitemold('coin')
  //graphitemold('fletching')
  //graphitemold('gear')
  graphitemold('gem')
  graphitemold('hammer_head')
  graphitemold('helmet_plating')
  //graphitemold('ingot')
  graphitemold('large_plate')
  graphitemold('leggings_plating')
  graphitemold('maille')
  //graphitemold('nugget')
  graphitemold('pick_head')
  //graphitemold('plate')
  graphitemold('repair_kit')
  //graphitemold('rod')
  graphitemold('small_axe_head')
  graphitemold('small_blade')
  graphitemold('tool_binding')
  graphitemold('tool_handle')
  graphitemold('tough_binding')
  graphitemold('tough_handle')
  graphitemold('wire')
  // Construct's Casting compatibility
  graphitemold('faceted_gem')
  graphitemold('spellbook_plating')
})

StartupEvents.registry('block', e => {

  // Nickel
  e.create("nickel_ore")
    .soundType("stone")
    .hardness(2.5)
    .resistance(1.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .requiresTool(true);

  e.create("deepslate_nickel_ore")
    .soundType("deepslate")
    .hardness(2.5)
    .resistance(1.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .requiresTool(true);

  e.create("nickel_block")
    .displayName('Block of Nickel')
    .soundType("metal")
    .hardness(2.5)
    .resistance(1.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .requiresTool(true);

  e.create("raw_nickel_block")
    .displayName('Block of Raw Nickel')
    .soundType("metal")
    .hardness(2.5)
    .resistance(1.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .requiresTool(true);

  // Aluminum
  e.create("aluminum_ore")
    .displayName('Bauxite Ore')
    .soundType("stone")
    .hardness(2.5)
    .resistance(1.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .requiresTool(true);

  e.create("deepslate_aluminum_ore")
    .displayName('Deepslate Bauxite Ore')
    .soundType("deepslate")
    .hardness(2.5)
    .resistance(1.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .requiresTool(true);

  e.create("aluminum_block")
    .displayName('Block of Aluminum')
    .soundType("metal")
    .hardness(2.5)
    .resistance(1.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .requiresTool(true);

  e.create("raw_aluminum_block")
    .displayName('Block of Bauxite')
    .soundType("metal")
    .hardness(2.5)
    .resistance(1.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .requiresTool(true);

  // Platinum
  e.create("platinum_ore")
    .displayName('Nether Platinum Ore')
    .soundType("stone")
    .hardness(3.0)
    .resistance(1.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .tagBlock("minecraft:beacon_base_blocks")
    .requiresTool(true);

  e.create("platinum_block")
    .displayName('Block of Platinum')
    .soundType("metal")
    .hardness(3.0)
    .resistance(1.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .requiresTool(true);

  e.create("raw_platinum_block")
    .displayName('Block of Raw Platinum')
    .soundType("metal")
    .hardness(3.0)
    .resistance(1.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .requiresTool(true);

  // Gravitite
  e.create("raw_gravitite_block")
    .displayName('Block of Raw Gravitite')
    .soundType("metal")
    .hardness(3.0)
    .resistance(1.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .requiresTool(true);
})
