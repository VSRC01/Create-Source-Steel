ServerEvents.recipes(event => {
    //----------------
    //replace ingots with plates, but what about blocks? --> need a way to fix it
    //----------------
    
        //mekanism
    event.replaceInput({ mod: 'mekanism'}, 'minecraft:iron_ingot', 'create:iron_sheet'),
    event.replaceInput({ mod: 'mekanismgenerators'}, 'minecraft:iron_ingot', 'create:iron_sheet'),
    event.replaceInput({ mod: 'mekanismgenerators'}, 'minecraft:copper_ingot', 'create:copper_sheet'),
    event.replaceInput({ mod: 'mekanism'}, 'minecraft:copper_ingot', 'create:copper_sheet'),
    event.replaceInput({ mod: 'mekanismgenerators'}, 'mekanism:ingot_osmium', 'kubejs:osmium_sheet'),
    event.replaceInput({ mod: 'mekanism'}, 'mekanism:ingot_osmium', 'kubejs:osmium_sheet'),
    event.replaceInput({ mod: 'mekanismgenerators'}, 'minecraft:gold_ingot', 'create:golden_sheet'),
    event.replaceInput({ mod: 'mekanism'}, 'minecraft:gold_ingot', 'create:golden_sheet'),

        //ae2
    event.replaceInput({ mod: 'ae2'}, 'minecraft:iron_ingot', 'create:iron_sheet'),
    event.replaceInput({ mod: 'ae2'}, 'minecraft:copper_ingot', 'create:copper_sheet'),
    event.replaceInput({ mod: 'ae2'}, 'minecraft:gold_ingot', 'create:golden_sheet'),

        //ars
    event.replaceInput({ mod: 'ars_nouveau'}, 'minecraft:iron_ingot', 'create:iron_sheet'),
    event.replaceInput({ mod: 'ars_nouveau'}, 'minecraft:copper_ingot', 'create:copper_sheet'),
    event.replaceInput({ mod: 'ae2'}, 'minecraft:gold_ingot', 'create:golden_sheet'),

    //----------------
    //replace furnace with steel casing for infuser and generator
    //----------------
    event.replaceInput({ id: 'mekanism:metallurgic_infuser'}, 'minecraft:furnace', 'mekanism:steel_casing'),
    event.replaceInput({id: 'mekanismgenerators:generator/heat'}, 'minecraft:furnace', 'mekanism:steel_casing'),

    //----------------
    //remove unwanted recipes
    //----------------

        //mekanism
    event.remove({id: 'mekanism:steel_casing'}),
    event.remove({id: 'mekanism:structural_glass'}),

        //ae2


        //ars


    //----------------
    //add wanted recipes
    //----------------
        //mekanism
    
            //structural glass
    event.recipes.create.deploying('mekanism:structural_glass', ['minecraft:glass', 'tfmg:heavy_plate']),

            //steel casing
    event.recipes.create.sequenced_assembly(
        //output
        [
            
            CreateItem.of('mekanism:steel_casing'),
        ],
        //input
        'mekanism:structural_glass',
        //sequence
        [
            event.recipes.create.deploying('kubejs:incomplete_steel_casing', ['kubejs:incomplete_steel_casing', 'kubejs:osmium_sheet']),
            event.recipes.create.pressing('kubejs:incomplete_steel_casing', 'kubejs:incomplete_steel_casing')
        ]
    )
    .transitionalItem('kubejs:incomplete_steel_casing')
    .loops(0)

    //ae2


    //ars


})