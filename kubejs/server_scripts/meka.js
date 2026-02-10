ServerEvents.recipes(event => [
    //replace ingots with plates
    event.replaceInput({ mod: 'mekanism'}, 'minecraft:iron_ingot', 'create:iron_sheet'),

    //replace furnace with steel casing for infuser and generator
    event.replaceInput({ id: 'mekanism:metallurgic_infuser'}, 'minecraft:furnace', 'mekanism:steel_casing'),
    
    //remove unwanted recipes
    event.remove({id: 'mekanism:steel_casing'})
])