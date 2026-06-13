// priority: 0

ServerEvents.recipes(event => {

  function cut(amount, item, input) {
    if(Item.exists(item))
      event.stonecutting(amount + item, input)
  }

  function sawmill(modid, logtag) {
    // log tag cutting
    cut("4x ", modid + "button", "#" + modid + logtag)
    cut("2x ", modid + "door", "#" + modid + logtag)
    cut("4x ", modid + "fence", "#" + modid + logtag)
    cut("1x ", modid + "fence_gate", "#" + modid + logtag)
    cut("4x ", modid + "planks", "#" + modid + logtag)
    cut("2x ", modid + "pressure_plate", "#" + modid + logtag)
    cut("2x ", modid + "sign", "#" + modid + logtag)
    cut("8x ", modid + "slab", "#" + modid + logtag)
    cut("4x ", modid + "stairs", "#" + modid + logtag)
    cut("1x ", modid + "trapdoor", "#" + modid + logtag)
    // plank cutting
    cut("1x ", modid + "button", modid + "planks")
    cut("1x ", modid + "fence", modid + "planks")
    cut("1x ", modid + "pressure_plate", modid + "planks")
    cut("1x ", modid + "sign", modid + "planks")
    cut("2x ", modid + "slab", modid + "planks")
    cut("1x ", modid + "stairs", modid + "planks")
  }

  // add woods here, "modname:wood_" "logtag"

  // Biomes O' Plenty
  //sawmill("biomesoplenty:dead_", "logs");
  //sawmill("biomesoplenty:empyreal_", "logs");
  //sawmill("biomesoplenty:fir_", "logs");
  //sawmill("biomesoplenty:hellbark_", "logs");
  //sawmill("biomesoplenty:jacaranda_", "logs");
  //sawmill("biomesoplenty:magic_", "logs");
  //sawmill("biomesoplenty:mahogany_", "logs");
  //sawmill("biomesoplenty:maple_", "logs");
  //sawmill("biomesoplenty:palm_", "logs");
  //sawmill("biomesoplenty:pine_", "logs");
  //sawmill("biomesoplenty:redwood_", "logs");
  //sawmill("biomesoplenty:umbran_", "logs");
  //sawmill("biomesoplenty:willow_", "logs");

  // Oh The Biomes We've Gone
  //sawmill("biomeswevegone:aspen_", "logs");
  //sawmill("biomeswevegone:baobab_", "logs");
  //sawmill("biomeswevegone:blue_enchanted_", "logs");
  //sawmill("biomeswevegone:cika_", "logs");
  //sawmill("biomeswevegone:cypress_", "logs");
  //sawmill("biomeswevegone:ebony_", "logs");
  //sawmill("biomeswevegone:fir_", "logs");
  //sawmill("biomeswevegone:florus_", "logs");
  //sawmill("biomeswevegone:green_enchanted_", "logs");
  //sawmill("biomeswevegone:holly_", "logs");
  //sawmill("biomeswevegone:ironwood_", "logs");
  //sawmill("biomeswevegone:jacaranda_", "logs");
  //sawmill("biomeswevegone:mahogany_", "logs");
  //sawmill("biomeswevegone:maple_", "logs");
  // NOTE: palo_verde is not listed as its wood type is just birch
  //sawmill("biomeswevegone:palm_", "logs");
  //sawmill("biomeswevegone:pine_", "logs");
  //sawmill("biomeswevegone:rainbow_eucalyptus_", "logs");
  //sawmill("biomeswevegone:redwood_", "logs");
  //sawmill("biomeswevegone:sakura_", "logs");
  //sawmill("biomeswevegone:skyris_", "logs");
  //sawmill("biomeswevegone:white_mangrove_", "logs");
  //sawmill("biomeswevegone:willow_", "logs");
  //sawmill("biomeswevegone:witch_hazel_", "logs");
  //sawmill("biomeswevegone:zelkova_", "logs");

  // Aether
  sawmill("aether:skyroot_", "logs");

  // Alex's Caves
  sawmill("alexscaves:pewen_", "logs");
  sawmill("alexscaves:thornwood_", "logs");

  // Ancient Aether
  //sawmill("ancient_aether:highsproot_", "logs");
  //sawmill("ancient_aether:sakura_", "logs");

  // Atmospheric
  sawmill("atmospheric:aspen_", "logs");
  sawmill("atmospheric:grimwood_", "logs");
  sawmill("atmospheric:kousa_", "logs");
  sawmill("atmospheric:laurel_", "logs");
  sawmill("atmospheric:morado_", "logs");
  sawmill("atmospheric:rosewood_", "logs");
  sawmill("atmospheric:yucca_", "logs");

  // Autumnity
  sawmill("autumnity:maple_", "logs");

  // Caverns and Chasms
  sawmill("caverns_and_chasms:azalea_", "logs");

  // Deep Aether
  //sawmill("deep_aether:conberry_", "logs");
  //sawmill("deep_aether:cruderoot_", "logs");
  //sawmill("deep_aether:roseroot_", "logs");
  //sawmill("deep_aether:sunroot_", "logs");
  //sawmill("deep_aether:yagroot_", "logs");

  // Endergetic Expansion
  sawmill("endergetic:poise_", "stems");

  // Environmental
  // disabled since Windswept Integrations replaces it with Windswept pine
  //sawmill("environmental:pine_", "logs");
  sawmill("environmental:plum_", "logs");
  sawmill("environmental:willow_", "logs");
  sawmill("environmental:wisteria_", "logs");

  // Minecraft
  sawmill("minecraft:acacia_", "logs");
  sawmill("minecraft:bamboo_", "blocks");
  sawmill("minecraft:birch_", "logs");
  sawmill("minecraft:cherry_", "logs");
  sawmill("minecraft:crimson_", "stems");
  sawmill("minecraft:dark_oak_", "logs");
  sawmill("minecraft:jungle_", "logs");
  sawmill("minecraft:mangrove_", "logs");
  sawmill("minecraft:oak_", "logs");
  // support for pale oak in 1.20 provided by Vanilla Backport
  sawmill("minecraft:pale_oak_", "logs");
  sawmill("minecraft:spruce_", "logs");
  sawmill("minecraft:warped_", "stems");

  // Quark
  // disable them if you turn them off in Quark's config!
  // unfortunately thanks to their stupid naming scheme
  // support remains in datapacks
  //sawmill("quark:ancient_", "logs");
  //sawmill("quark:azalea_", "logs");
  //sawmill("quark:blossom_", "logs");

  // Tinker's Construct
  // unfortunately thanks to their stupid naming scheme
  // support remains in datapacks
  //sawmill("tconstruct:bloodshroom_", "logs");
  //sawmill("tconstruct:enderbark_", "logs");
  //sawmill("tconstruct:greenheart_", "logs");
  //sawmill("tconstruct:skyroot_", "logs");

  // Upgrade Aquatic
  sawmill("upgrade_aquatic:driftwood_", "logs");
  sawmill("upgrade_aquatic:river_", "logs");

  // Aether Redux
  //sawmill("aether_redux:blightwillow_", "logs");
  //sawmill("aether_redux:cloudcap_", "stems");
  //sawmill("aether_redux:crystal_", "logs");
  //sawmill("aether_redux:fieldsproot_", "logs");
  //sawmill("aether_redux:glacia_", "logs");
  //sawmill("aether_redux:jellyshroom_", "stems");

  // Windswept
  sawmill("windswept:chestnut_", "logs");
  sawmill("windswept:holly_", "logs");
  sawmill("windswept:pine_", "logs");

  // Darker Depths
  sawmill("darkerdepths:petrified_", "logs");

  // Spawn
  sawmill("spawn:date_", "logs");
  sawmill("spawn:rotten_", "logs");

  // Wan Ancient Beasts
  sawmill("wan_ancient_beasts:ginkgo_", "logs");

  // BetterEnd
  sawmill("betterend:dragon_tree_", "logs");
  sawmill("betterend:end_lotus_", "logs");
  sawmill("betterend:helix_tree_", "logs");
  sawmill("betterend:jellyshroom_", "logs");
  sawmill("betterend:lacugrove_", "logs");
  sawmill("betterend:lucernia_", "logs");
  sawmill("betterend:mossy_glowshroom_", "logs");
  sawmill("betterend:pythadendron_", "logs");
  sawmill("betterend:tenanea_", "logs");
  sawmill("betterend:umbrella_tree_", "logs");

});
