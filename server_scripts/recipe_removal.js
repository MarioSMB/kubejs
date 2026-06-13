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
    "tconstruct:seared_melter",
    "tconstruct:seared_heater",
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
});

// broken mod adds some bad items to tags, try to fix them!
ServerEvents.tags('block', event => {
  event.remove('create:non_movable', 'unusual_furniture:industrial_bench')
  event.remove('create:seats', 'unusual_furniture:industrial_bench')
})

ServerEvents.tags('item', event => {
  event.remove('forge:plates', 'tinkers_reforged:graphite_plate')
})
