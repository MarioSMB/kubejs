// priority: 0

ItemEvents.modification(event => {

    event.modify('wind_spellbooks:aeromancer_helmet', item => {
        item.tier = tier => {
            // Change repair material to a specific item or tag
            tier.repairIngredient = 'irons_spellbooks:magic_cloth' 
        }
    })
    event.modify('wind_spellbooks:aeromancer_chestplate', item => {
        item.tier = tier => {
            // Change repair material to a specific item or tag
            tier.repairIngredient = 'irons_spellbooks:magic_cloth' 
        }
    })
    event.modify('wind_spellbooks:aeromancer_leggings', item => {
        item.tier = tier => {
            // Change repair material to a specific item or tag
            tier.repairIngredient = 'irons_spellbooks:magic_cloth' 
        }
    })
    event.modify('wind_spellbooks:aeromancer_boots', item => {
        item.tier = tier => {
            // Change repair material to a specific item or tag
            tier.repairIngredient = 'irons_spellbooks:magic_cloth' 
        }
    })
})

