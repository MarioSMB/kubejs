// priority: 0

ItemEvents.modification(event => {
    function repair(input, ingredient) {
      event.modify(input, item => {
          item.tier = tier => {
              tier.repairIngredient = ingredient
          }
      })
    }

    repair('wind_spellbooks:aeromancer_helmet', 'irons_spellbooks:magic_cloth')
    repair('wind_spellbooks:aeromancer_chestplate', 'irons_spellbooks:magic_cloth')
    repair('wind_spellbooks:aeromancer_leggings', 'irons_spellbooks:magic_cloth')
    repair('wind_spellbooks:aeromancer_boots', 'irons_spellbooks:magic_cloth')
})
