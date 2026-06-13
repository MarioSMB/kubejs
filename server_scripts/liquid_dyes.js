// priority: 0

// Requires KubeJS Create
// NOTE: if the base item doesn't have a color in its name this script won't work!

ServerEvents.recipes(event => {
  // list of minecraft dye colors
  //const colors = [
  //  "white", "light_gray", "gray", "black",
  //  "brown", "red", "orange", "yellow",
  //  "lime", "green", "cyan", "light_blue",
  //  "blue", "purple", "magenta", "pink"
  //];

  function filler(input, amount) {
    var item_output = "";
    var item_input = "";
    var inputArray = [];
    // goal: for each color we make a recipe to color every item
    // EXCEPT the item with the same color, to prevent resource waste
    input.forEach(color => {
      item_output = color.item;
      input.forEach(item_dye => {
        // prevent an infinite loop of coloring the same item with the same color
        if(color.dye != item_dye.dye) {
          item_input = item_dye.item;
          inputArray.push(item_input);
        }
      });
      event.recipes.create.filling(item_output, [Fluid.of(color.dye, amount).toJson(), Array.from(inputArray)]);
      inputArray.length = 0;
    });
  }

  // item dying
  var beds = [
    {"dye":"kubejs:white_dye","item":"minecraft:white_bed"},
    {"dye":"kubejs:light_gray_dye","item":"minecraft:light_gray_bed"},
    {"dye":"kubejs:gray_dye","item":"minecraft:gray_bed"},
    {"dye":"kubejs:black_dye","item":"minecraft:black_bed"},
    {"dye":"kubejs:brown_dye","item":"minecraft:brown_bed"},
    {"dye":"kubejs:red_dye","item":"minecraft:red_bed"},
    {"dye":"kubejs:orange_dye","item":"minecraft:orange_bed"},
    {"dye":"kubejs:yellow_dye","item":"minecraft:yellow_bed"},
    {"dye":"kubejs:lime_dye","item":"minecraft:lime_bed"},
    {"dye":"kubejs:green_dye","item":"minecraft:green_bed"},
    {"dye":"kubejs:cyan_dye","item":"minecraft:cyan_bed"},
    {"dye":"kubejs:light_blue_dye","item":"minecraft:light_blue_bed"},
    {"dye":"kubejs:blue_dye","item":"minecraft:blue_bed"},
    {"dye":"kubejs:purple_dye","item":"minecraft:purple_bed"},
    {"dye":"kubejs:magenta_dye","item":"minecraft:magenta_bed"},
    {"dye":"kubejs:pink_dye","item":"minecraft:pink_bed"}
  ]
  filler(beds, 250);

  // item dying
  var wools = [
    {"dye":"kubejs:white_dye","item":"minecraft:white_wool"},
    {"dye":"kubejs:light_gray_dye","item":"minecraft:light_gray_wool"},
    {"dye":"kubejs:gray_dye","item":"minecraft:gray_wool"},
    {"dye":"kubejs:black_dye","item":"minecraft:black_wool"},
    {"dye":"kubejs:brown_dye","item":"minecraft:brown_wool"},
    {"dye":"kubejs:red_dye","item":"minecraft:red_wool"},
    {"dye":"kubejs:orange_dye","item":"minecraft:orange_wool"},
    {"dye":"kubejs:yellow_dye","item":"minecraft:yellow_wool"},
    {"dye":"kubejs:lime_dye","item":"minecraft:lime_wool"},
    {"dye":"kubejs:green_dye","item":"minecraft:green_wool"},
    {"dye":"kubejs:cyan_dye","item":"minecraft:cyan_wool"},
    {"dye":"kubejs:light_blue_dye","item":"minecraft:light_blue_wool"},
    {"dye":"kubejs:blue_dye","item":"minecraft:blue_wool"},
    {"dye":"kubejs:purple_dye","item":"minecraft:purple_wool"},
    {"dye":"kubejs:magenta_dye","item":"minecraft:magenta_wool"},
    {"dye":"kubejs:pink_dye","item":"minecraft:pink_wool"}
  ]
  filler(wools, 250);

  // item dying
  var concrete_powder = [
    {"dye":"kubejs:white_dye","item":"minecraft:white_concrete_powder"},
    {"dye":"kubejs:light_gray_dye","item":"minecraft:light_gray_concrete_powder"},
    {"dye":"kubejs:gray_dye","item":"minecraft:gray_concrete_powder"},
    {"dye":"kubejs:black_dye","item":"minecraft:black_concrete_powder"},
    {"dye":"kubejs:brown_dye","item":"minecraft:brown_concrete_powder"},
    {"dye":"kubejs:red_dye","item":"minecraft:red_concrete_powder"},
    {"dye":"kubejs:orange_dye","item":"minecraft:orange_concrete_powder"},
    {"dye":"kubejs:yellow_dye","item":"minecraft:yellow_concrete_powder"},
    {"dye":"kubejs:lime_dye","item":"minecraft:lime_concrete_powder"},
    {"dye":"kubejs:green_dye","item":"minecraft:green_concrete_powder"},
    {"dye":"kubejs:cyan_dye","item":"minecraft:cyan_concrete_powder"},
    {"dye":"kubejs:light_blue_dye","item":"minecraft:light_blue_concrete_powder"},
    {"dye":"kubejs:blue_dye","item":"minecraft:blue_concrete_powder"},
    {"dye":"kubejs:purple_dye","item":"minecraft:purple_concrete_powder"},
    {"dye":"kubejs:magenta_dye","item":"minecraft:magenta_concrete_powder"},
    {"dye":"kubejs:pink_dye","item":"minecraft:pink_concrete_powder"}
  ]
  filler(concrete_powder, 32);

  // item dying
  var concrete = [
    {"dye":"kubejs:white_dye","item":"minecraft:white_concrete"},
    {"dye":"kubejs:light_gray_dye","item":"minecraft:light_gray_concrete"},
    {"dye":"kubejs:gray_dye","item":"minecraft:gray_concrete"},
    {"dye":"kubejs:black_dye","item":"minecraft:black_concrete"},
    {"dye":"kubejs:brown_dye","item":"minecraft:brown_concrete"},
    {"dye":"kubejs:red_dye","item":"minecraft:red_concrete"},
    {"dye":"kubejs:orange_dye","item":"minecraft:orange_concrete"},
    {"dye":"kubejs:yellow_dye","item":"minecraft:yellow_concrete"},
    {"dye":"kubejs:lime_dye","item":"minecraft:lime_concrete"},
    {"dye":"kubejs:green_dye","item":"minecraft:green_concrete"},
    {"dye":"kubejs:cyan_dye","item":"minecraft:cyan_concrete"},
    {"dye":"kubejs:light_blue_dye","item":"minecraft:light_blue_concrete"},
    {"dye":"kubejs:blue_dye","item":"minecraft:blue_concrete"},
    {"dye":"kubejs:purple_dye","item":"minecraft:purple_concrete"},
    {"dye":"kubejs:magenta_dye","item":"minecraft:magenta_concrete"},
    {"dye":"kubejs:pink_dye","item":"minecraft:pink_concrete"}
  ]
  filler(concrete, 32);

  // item dying
  var terracotta = [
    {"dye":"minecraft:water","item":"minecraft:terracotta"},
    {"dye":"kubejs:white_dye","item":"minecraft:white_terracotta"},
    {"dye":"kubejs:light_gray_dye","item":"minecraft:light_gray_terracotta"},
    {"dye":"kubejs:gray_dye","item":"minecraft:gray_terracotta"},
    {"dye":"kubejs:black_dye","item":"minecraft:black_terracotta"},
    {"dye":"kubejs:brown_dye","item":"minecraft:brown_terracotta"},
    {"dye":"kubejs:red_dye","item":"minecraft:red_terracotta"},
    {"dye":"kubejs:orange_dye","item":"minecraft:orange_terracotta"},
    {"dye":"kubejs:yellow_dye","item":"minecraft:yellow_terracotta"},
    {"dye":"kubejs:lime_dye","item":"minecraft:lime_terracotta"},
    {"dye":"kubejs:green_dye","item":"minecraft:green_terracotta"},
    {"dye":"kubejs:cyan_dye","item":"minecraft:cyan_terracotta"},
    {"dye":"kubejs:light_blue_dye","item":"minecraft:light_blue_terracotta"},
    {"dye":"kubejs:blue_dye","item":"minecraft:blue_terracotta"},
    {"dye":"kubejs:purple_dye","item":"minecraft:purple_terracotta"},
    {"dye":"kubejs:magenta_dye","item":"minecraft:magenta_terracotta"},
    {"dye":"kubejs:pink_dye","item":"minecraft:pink_terracotta"}
  ]
  filler(terracotta, 32);

  // item dying
  var candles = [
    {"dye":"minecraft:water","item":"minecraft:candle"},
    {"dye":"kubejs:white_dye","item":"minecraft:white_candle"},
    {"dye":"kubejs:light_gray_dye","item":"minecraft:light_gray_candle"},
    {"dye":"kubejs:gray_dye","item":"minecraft:gray_candle"},
    {"dye":"kubejs:black_dye","item":"minecraft:black_candle"},
    {"dye":"kubejs:brown_dye","item":"minecraft:brown_candle"},
    {"dye":"kubejs:red_dye","item":"minecraft:red_candle"},
    {"dye":"kubejs:orange_dye","item":"minecraft:orange_candle"},
    {"dye":"kubejs:yellow_dye","item":"minecraft:yellow_candle"},
    {"dye":"kubejs:lime_dye","item":"minecraft:lime_candle"},
    {"dye":"kubejs:green_dye","item":"minecraft:green_candle"},
    {"dye":"kubejs:cyan_dye","item":"minecraft:cyan_candle"},
    {"dye":"kubejs:light_blue_dye","item":"minecraft:light_blue_candle"},
    {"dye":"kubejs:blue_dye","item":"minecraft:blue_candle"},
    {"dye":"kubejs:purple_dye","item":"minecraft:purple_candle"},
    {"dye":"kubejs:magenta_dye","item":"minecraft:magenta_candle"},
    {"dye":"kubejs:pink_dye","item":"minecraft:pink_candle"}
  ]
  filler(candles, 250);

  // item dying
  var candle_holders = [
    {"dye":"minecraft:water","item":"supplementaries:candle_holder"},
    {"dye":"kubejs:white_dye","item":"supplementaries:candle_holder_white"},
    {"dye":"kubejs:light_gray_dye","item":"supplementaries:candle_holder_light_gray"},
    {"dye":"kubejs:gray_dye","item":"supplementaries:candle_holder_gray"},
    {"dye":"kubejs:black_dye","item":"supplementaries:candle_holder_black"},
    {"dye":"kubejs:brown_dye","item":"supplementaries:candle_holder_brown"},
    {"dye":"kubejs:red_dye","item":"supplementaries:candle_holder_red"},
    {"dye":"kubejs:orange_dye","item":"supplementaries:candle_holder_orange"},
    {"dye":"kubejs:yellow_dye","item":"supplementaries:candle_holder_yellow"},
    {"dye":"kubejs:lime_dye","item":"supplementaries:candle_holder_lime"},
    {"dye":"kubejs:green_dye","item":"supplementaries:candle_holder_green"},
    {"dye":"kubejs:cyan_dye","item":"supplementaries:candle_holder_cyan"},
    {"dye":"kubejs:light_blue_dye","item":"supplementaries:candle_holder_light_blue"},
    {"dye":"kubejs:blue_dye","item":"supplementaries:candle_holder_blue"},
    {"dye":"kubejs:purple_dye","item":"supplementaries:candle_holder_purple"},
    {"dye":"kubejs:magenta_dye","item":"supplementaries:candle_holder_magenta"},
    {"dye":"kubejs:pink_dye","item":"supplementaries:candle_holder_pink"}
  ]
  filler(candle_holders, 250);

  // item dying
  var hanging_canvas_signs = [
    {"dye":"minecraft:water","item":"farmersdelight:hanging_canvas_sign"},
    {"dye":"kubejs:white_dye","item":"farmersdelight:white_hanging_canvas_sign"},
    {"dye":"kubejs:light_gray_dye","item":"farmersdelight:light_gray_hanging_canvas_sign"},
    {"dye":"kubejs:gray_dye","item":"farmersdelight:gray_hanging_canvas_sign"},
    {"dye":"kubejs:black_dye","item":"farmersdelight:black_hanging_canvas_sign"},
    {"dye":"kubejs:brown_dye","item":"farmersdelight:brown_hanging_canvas_sign"},
    {"dye":"kubejs:red_dye","item":"farmersdelight:red_hanging_canvas_sign"},
    {"dye":"kubejs:orange_dye","item":"farmersdelight:orange_hanging_canvas_sign"},
    {"dye":"kubejs:yellow_dye","item":"farmersdelight:yellow_hanging_canvas_sign"},
    {"dye":"kubejs:lime_dye","item":"farmersdelight:lime_hanging_canvas_sign"},
    {"dye":"kubejs:green_dye","item":"farmersdelight:green_hanging_canvas_sign"},
    {"dye":"kubejs:cyan_dye","item":"farmersdelight:cyan_hanging_canvas_sign"},
    {"dye":"kubejs:light_blue_dye","item":"farmersdelight:light_blue_hanging_canvas_sign"},
    {"dye":"kubejs:blue_dye","item":"farmersdelight:blue_hanging_canvas_sign"},
    {"dye":"kubejs:purple_dye","item":"farmersdelight:purple_hanging_canvas_sign"},
    {"dye":"kubejs:magenta_dye","item":"farmersdelight:magenta_hanging_canvas_sign"},
    {"dye":"kubejs:pink_dye","item":"farmersdelight:pink_hanging_canvas_sign"}
  ]
  filler(hanging_canvas_signs, 250);

  // item dying
  var canvas_signs = [
    {"dye":"minecraft:water","item":"farmersdelight:canvas_sign"},
    {"dye":"kubejs:white_dye","item":"farmersdelight:white_canvas_sign"},
    {"dye":"kubejs:light_gray_dye","item":"farmersdelight:light_gray_canvas_sign"},
    {"dye":"kubejs:gray_dye","item":"farmersdelight:gray_canvas_sign"},
    {"dye":"kubejs:black_dye","item":"farmersdelight:black_canvas_sign"},
    {"dye":"kubejs:brown_dye","item":"farmersdelight:brown_canvas_sign"},
    {"dye":"kubejs:red_dye","item":"farmersdelight:red_canvas_sign"},
    {"dye":"kubejs:orange_dye","item":"farmersdelight:orange_canvas_sign"},
    {"dye":"kubejs:yellow_dye","item":"farmersdelight:yellow_canvas_sign"},
    {"dye":"kubejs:lime_dye","item":"farmersdelight:lime_canvas_sign"},
    {"dye":"kubejs:green_dye","item":"farmersdelight:green_canvas_sign"},
    {"dye":"kubejs:cyan_dye","item":"farmersdelight:cyan_canvas_sign"},
    {"dye":"kubejs:light_blue_dye","item":"farmersdelight:light_blue_canvas_sign"},
    {"dye":"kubejs:blue_dye","item":"farmersdelight:blue_canvas_sign"},
    {"dye":"kubejs:purple_dye","item":"farmersdelight:purple_canvas_sign"},
    {"dye":"kubejs:magenta_dye","item":"farmersdelight:magenta_canvas_sign"},
    {"dye":"kubejs:pink_dye","item":"farmersdelight:pink_canvas_sign"}
  ]
  filler(canvas_signs, 250);

  // item dying
  var stained_glass = [
    {"dye":"minecraft:water","item":"minecraft:glass"},
    {"dye":"kubejs:white_dye","item":"minecraft:white_stained_glass"},
    {"dye":"kubejs:light_gray_dye","item":"minecraft:light_gray_stained_glass"},
    {"dye":"kubejs:gray_dye","item":"minecraft:gray_stained_glass"},
    {"dye":"kubejs:black_dye","item":"minecraft:black_stained_glass"},
    {"dye":"kubejs:brown_dye","item":"minecraft:brown_stained_glass"},
    {"dye":"kubejs:red_dye","item":"minecraft:red_stained_glass"},
    {"dye":"kubejs:orange_dye","item":"minecraft:orange_stained_glass"},
    {"dye":"kubejs:yellow_dye","item":"minecraft:yellow_stained_glass"},
    {"dye":"kubejs:lime_dye","item":"minecraft:lime_stained_glass"},
    {"dye":"kubejs:green_dye","item":"minecraft:green_stained_glass"},
    {"dye":"kubejs:cyan_dye","item":"minecraft:cyan_stained_glass"},
    {"dye":"kubejs:light_blue_dye","item":"minecraft:light_blue_stained_glass"},
    {"dye":"kubejs:blue_dye","item":"minecraft:blue_stained_glass"},
    {"dye":"kubejs:purple_dye","item":"minecraft:purple_stained_glass"},
    {"dye":"kubejs:magenta_dye","item":"minecraft:magenta_stained_glass"},
    {"dye":"kubejs:pink_dye","item":"minecraft:pink_stained_glass"}
  ]
  filler(stained_glass, 32);

  // item dying
  var stained_glass_panes = [
    {"dye":"minecraft:water","item":"minecraft:glass_pane"},
    {"dye":"kubejs:white_dye","item":"minecraft:white_stained_glass_pane"},
    {"dye":"kubejs:light_gray_dye","item":"minecraft:light_gray_stained_glass_pane"},
    {"dye":"kubejs:gray_dye","item":"minecraft:gray_stained_glass_pane"},
    {"dye":"kubejs:black_dye","item":"minecraft:black_stained_glass_pane"},
    {"dye":"kubejs:brown_dye","item":"minecraft:brown_stained_glass_pane"},
    {"dye":"kubejs:red_dye","item":"minecraft:red_stained_glass_pane"},
    {"dye":"kubejs:orange_dye","item":"minecraft:orange_stained_glass_pane"},
    {"dye":"kubejs:yellow_dye","item":"minecraft:yellow_stained_glass_pane"},
    {"dye":"kubejs:lime_dye","item":"minecraft:lime_stained_glass_pane"},
    {"dye":"kubejs:green_dye","item":"minecraft:green_stained_glass_pane"},
    {"dye":"kubejs:cyan_dye","item":"minecraft:cyan_stained_glass_pane"},
    {"dye":"kubejs:light_blue_dye","item":"minecraft:light_blue_stained_glass_pane"},
    {"dye":"kubejs:blue_dye","item":"minecraft:blue_stained_glass_pane"},
    {"dye":"kubejs:purple_dye","item":"minecraft:purple_stained_glass_pane"},
    {"dye":"kubejs:magenta_dye","item":"minecraft:magenta_stained_glass_pane"},
    {"dye":"kubejs:pink_dye","item":"minecraft:pink_stained_glass_pane"}
  ]
  filler(stained_glass_panes, 32);
});
