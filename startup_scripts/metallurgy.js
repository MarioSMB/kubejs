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

  // Scorched Guns 2 extra casts (replacing their molds)
  function mold(item) {
    e.create(item + "_cast").texture("kubejs:item/cast/" + item)
    e.create(item + "_sand_cast").texture("kubejs:item/sand_cast/" + item)
    e.create(item + "_red_sand_cast").texture("kubejs:item/red_sand_cast/" + item)
  }
  mold("bullet")
  mold("small_casing")
  mold("medium_casing")
  mold("large_casing")
  mold("gun_frame")

  // Scorched Nugget, made from blend texture from Scorched Guns 2
  e.create('scorched_nugget').rarity('EPIC')
  // Diamond Steel Nugget, made from blend texture from Scorched Guns 2
  e.create('diamond_steel_nugget')
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

StartupEvents.registry('fluid', event => {

  // molten anthralite (Scorched Guns 2)
  event.create('molten_anthralite')
    .displayName('Molten Anthralite')
    .stillTexture('kubejs:fluid/molten/compat_ore/anthralite/still')
    .flowingTexture('kubejs:fluid/molten/compat_ore/anthralite/flowing')
    .bucketColor(0x806C62)
    .density(3000)
    .viscosity(6000)
    .temperature(1300)

  // molten mauvite (Scorched Guns 2: Caves & Cliffs)
  event.create('molten_mauvite')
    .displayName('Molten Mauvite')
    .stillTexture('kubejs:fluid/molten/compat_alloy/mauvite/still')
    .flowingTexture('kubejs:fluid/molten/compat_alloy/mauvite/flowing')
    .bucketColor(0x6F325B)
    .density(3000)
    .viscosity(6000)
    .temperature(1300)

  // molten diamond steel (Scorched Guns 2)
  event.create('molten_diamond_steel')
    .displayName('Molten Diamond Steel')
    .stillTexture('kubejs:fluid/molten/compat_alloy/diamond_steel/still')
    .flowingTexture('kubejs:fluid/molten/compat_alloy/diamond_steel/flowing')
    .bucketColor(0x829B9E)
    .density(3000)
    .viscosity(6000)
    .temperature(1300)

  // molten necromium (Caverns & Chasms)
  event.create('molten_necromium')
    .displayName('Molten Necromium')
    .stillTexture('kubejs:fluid/molten/compat_alloy/necromium/still')
    .flowingTexture('kubejs:fluid/molten/compat_alloy/necromium/flowing')
    .bucketColor(0x6C877F)
    .density(3000)
    .viscosity(6000)
    .temperature(1300)
})
