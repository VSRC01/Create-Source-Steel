ServerEvents.recipes(event => {
    //----------------
    //replace recipes inputs
    //----------------
    //mekanism
    //---------
    //plates
    //event.replaceInput({ mod: 'mekanism'}, 'minecraft:iron_ingot', 'create:iron_sheet'),
    //event.replaceInput({ mod: 'mekanismgenerators'}, 'minecraft:iron_ingot', 'create:iron_sheet'),
    //event.replaceInput({ mod: 'mekanismgenerators'}, 'minecraft:copper_ingot', 'create:copper_sheet'),
    //event.replaceInput({ mod: 'mekanism'}, 'minecraft:copper_ingot', 'create:copper_sheet'),
    //event.replaceInput({ mod: 'mekanismgenerators'}, 'mekanism:ingot_osmium', 'kubejs:osmium_sheet'),
    //event.replaceInput({ mod: 'mekanism'}, 'mekanism:ingot_osmium', 'kubejs:osmium_sheet'),
    //event.replaceInput({ mod: 'mekanismgenerators'}, 'minecraft:gold_ingot', 'create:golden_sheet'),
    //event.replaceInput({ mod: 'mekanism'}, 'minecraft:gold_ingot', 'create:golden_sheet'),
    //circuits
    event.replaceInput({ mod: 'mekanism'}, 'mekanism:basic_control_circuit', 'kubejs:basic_circuit_board'),
    event.replaceInput({ mod: 'mekanism'}, 'mekanism:advanced_control_circuit', 'kubejs:advanced_circuit_board'),
    event.replaceInput({ mod: 'mekanism'}, 'mekanism:elite_control_circuit', 'kubejs:elite_circuit_board'),
    event.replaceInput({ mod: 'mekanism'}, 'mekanism:ultimate_control_circuit', 'kubejs:ultimate_circuit_board'),
    event.replaceInput({ mod: 'mekanismgenerators'}, 'mekanism:basic_control_circuit', 'kubejs:basic_circuit_board'),
    event.replaceInput({ mod: 'mekanismgenerators'}, 'mekanism:advanced_control_circuit', 'kubejs:advanced_circuit_board'),
    event.replaceInput({ mod: 'mekanismgenerators'}, 'mekanism:elite_control_circuit', 'kubejs:elite_circuit_board'),
    event.replaceInput({ mod: 'mekanismgenerators'}, 'mekanism:ultimate_control_circuit', 'kubejs:ultimate_circuit_board'),


    //----------
    //ae2
    //----------
    //plates
    event.replaceInput({ mod: 'ae2'}, 'minecraft:iron_ingot', 'create:iron_sheet'),
    event.replaceInput({ mod: 'ae2'}, 'minecraft:copper_ingot', 'create:copper_sheet'),
    event.replaceInput({ mod: 'ae2'}, 'minecraft:gold_ingot', 'create:golden_sheet'),
    //circuits
    event.replaceInput({ mod: 'ae2'}, 'ae2:calculation_processor', 'kubejs:calculation_circuit'),
    event.replaceInput({ mod: 'ae2'}, 'ae2:engineering_processor', 'kubejs:engineering_circuit'),
    event.replaceInput({ mod: 'ae2'}, 'ae2:logic_processor', 'kubejs:logic_circuit'),

    //ars
    event.replaceInput({ mod: 'ars_nouveau'}, 'minecraft:iron_ingot', 'create:iron_sheet'),
    event.replaceInput({ mod: 'ars_nouveau'}, 'minecraft:copper_ingot', 'create:copper_sheet'),
    event.replaceInput({ mod: 'ars_nouveau'}, 'minecraft:gold_ingot', 'create:golden_sheet'),

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
    event.remove({id:'mekanism:control_circuit/basic'}),
    event.remove({id:'mekanism:control_circuit/advanced'}),
    event.remove({id:'mekanism:control_circuit/infused_advanced'}),
    event.remove({id:'mekanism:control_circuit/elite'}),
    event.remove({id:'mekanism:control_circuit/infused_elite'}),
    event.remove({id:'mekanism:control_circuit/ultimate'}),
    event.remove({id:'mekanism:control_circuit/infused_ultimate'}),

    //ae2
    event.remove({id:'ae2:inscriber/logic_processor'}),
    event.remove({id:'ae2:inscriber/engineering_processor'}),
    event.remove({id:'ae2:inscriber/calculation_processor'}),

    //ars


    //---------------------
    //add wanted recipes
    //---------------------
    //mekanism
    //--------
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

    //basic_circuit
    //deploying
    event.recipes.create.deploying('kubejs:coated_basic_circuit_board', ['tfmg:empty_circuit_board', 'kubejs:osmium_sheet']),
    //etching
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "ingredients": [
            {
            "item": "kubejs:coated_basic_circuit_board"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "tfmg:sulfuric_acid"
            }
        ],
        "processing_time": 100,
        "results": [
            {
            "id": "kubejs:etched_basic_circuit_board"
            }
        ]
    })
    //sequenced_assembly
    event.recipes.create.sequenced_assembly(
        //output
        [
            CreateItem.of('kubejs:basic_circuit_board'),
        ],
        //input
        'kubejs:etched_basic_circuit_board',
        //sequence
        [
            event.recipes.create.deploying('kubejs:incomplete_basic_circuit_board', ['kubejs:incomplete_basic_circuit_board', 'tfmg:capacitor_item']),
            event.recipes.create.deploying('kubejs:incomplete_basic_circuit_board', ['kubejs:incomplete_basic_circuit_board', 'tfmg:resistor']),
            event.recipes.create.deploying('kubejs:incomplete_basic_circuit_board', ['kubejs:incomplete_basic_circuit_board', 'tfmg:transistor_item']),
            event.recipes.create.deploying('kubejs:incomplete_basic_circuit_board', ['kubejs:incomplete_basic_circuit_board', 'tfmg:resistor']),
        ]
    )
    .transitionalItem('kubejs:incomplete_basic_circuit_board')
    .loops(2),

    //advanced_circuit
    //deploying
    event.recipes.create.deploying('kubejs:coated_advanced_circuit_board', ['tfmg:empty_circuit_board', 'mekanism:alloy_infused']),
    //etching
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "ingredients": [
            {
            "item": "kubejs:coated_advanced_circuit_board"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "tfmg:sulfuric_acid"
            }
        ],
        "processing_time": 100,
        "results": [
            {
            "id": "kubejs:etched_advanced_circuit_board"
            }
        ]
    })
    //sequenced_assembly
    event.recipes.create.sequenced_assembly(
        //output
        [
            CreateItem.of('kubejs:advanced_circuit_board'),
        ],
        //input
        'kubejs:etched_advanced_circuit_board',
        //sequence
        [
            event.recipes.create.deploying('kubejs:incomplete_advanced_circuit_board', ['kubejs:incomplete_advanced_circuit_board', 'tfmg:capacitor_item']),
            event.recipes.create.deploying('kubejs:incomplete_advanced_circuit_board', ['kubejs:incomplete_advanced_circuit_board', 'tfmg:resistor']),
            event.recipes.create.deploying('kubejs:incomplete_advanced_circuit_board', ['kubejs:incomplete_advanced_circuit_board', 'tfmg:transistor_item']),
            event.recipes.create.deploying('kubejs:incomplete_advanced_circuit_board', ['kubejs:incomplete_advanced_circuit_board', 'tfmg:resistor']),
        ]
    )
    .transitionalItem('kubejs:incomplete_basic_circuit_board')
    .loops(4),

    //elite_circuit
    //deploying
    event.recipes.create.deploying('kubejs:coated_elite_circuit_board', ['tfmg:empty_circuit_board', 'mekanism:alloy_reinforced']),
    //etching
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "ingredients": [
            {
            "item": "kubejs:coated_elite_circuit_board"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "tfmg:sulfuric_acid"
            }
        ],
        "processing_time": 100,
        "results": [
            {
            "id": "kubejs:etched_elite_circuit_board"
            }
        ]
    })
    //sequenced_assembly
    event.recipes.create.sequenced_assembly(
        //output
        [
            CreateItem.of('kubejs:elite_circuit_board'),
        ],
        //input
        'kubejs:etched_elite_circuit_board',
        //sequence
        [
            event.recipes.create.deploying('kubejs:incomplete_elite_circuit_board', ['kubejs:incomplete_elite_circuit_board', 'tfmg:capacitor_item']),
            event.recipes.create.deploying('kubejs:incomplete_elite_circuit_board', ['kubejs:incomplete_elite_circuit_board', 'tfmg:resistor']),
            event.recipes.create.deploying('kubejs:incomplete_elite_circuit_board', ['kubejs:incomplete_elite_circuit_board', 'tfmg:transistor_item']),
            event.recipes.create.deploying('kubejs:incomplete_elite_circuit_board', ['kubejs:incomplete_elite_circuit_board', 'tfmg:resistor']),
        ]
    )
    .transitionalItem('kubejs:incomplete_elite_circuit_board')
    .loops(6),

    //ultimate_circuit
    //deploying
    event.recipes.create.deploying('kubejs:coated_ultimate_circuit_board', ['tfmg:empty_circuit_board', 'mekanism:alloy_atomic']),
    //etching
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "ingredients": [
            {
            "item": "kubejs:coated_ultimate_circuit_board"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "tfmg:sulfuric_acid"
            }
        ],
        "processing_time": 100,
        "results": [
            {
            "id": "kubejs:etched_ultimate_circuit_board"
            }
        ]
    })
    //sequenced_assembly
    event.recipes.create.sequenced_assembly(
        //output
        [
            CreateItem.of('kubejs:ultimate_circuit_board'),
        ],
        //input
        'kubejs:etched_ultimate_circuit_board',
        //sequence
        [
            event.recipes.create.deploying('kubejs:incomplete_ultimate_circuit_board', ['kubejs:incomplete_ultimate_circuit_board', 'tfmg:capacitor_item']),
            event.recipes.create.deploying('kubejs:incomplete_ultimate_circuit_board', ['kubejs:incomplete_ultimate_circuit_board', 'tfmg:resistor']),
            event.recipes.create.deploying('kubejs:incomplete_ultimate_circuit_board', ['kubejs:incomplete_ultimate_circuit_board', 'tfmg:transistor_item']),
            event.recipes.create.deploying('kubejs:incomplete_ultimate_circuit_board', ['kubejs:incomplete_ultimate_circuit_board', 'tfmg:resistor']),
        ]
    )
    .transitionalItem('kubejs:incomplete_elite_circuit_board')
    .loops(8),
    //--------
    //ae2
    //--------
    //calculation
    //deploying
    event.recipes.create.deploying('kubejs:coated_calculation_circuit', ['ae2:printed_silicon', 'ae2:printed_calculation_processor']),
    //etching
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "ingredients": [
            {
            "item": "kubejs:coated_calculation_circuit"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "tfmg:sulfuric_acid"
            }
        ],
        "processing_time": 100,
        "results": [
            {
            "id": "kubejs:etched_calculation_circuit"
            }
        ]
    })
    //asembly
    event.recipes.create.sequenced_assembly(
        //output
        [
            CreateItem.of('kubejs:calculation_circuit'),
        ],
        //input
        'kubejs:etched_calculation_circuit',
        //sequence
        [
            event.recipes.create.deploying('kubejs:incomplete_calculation_circuit', ['kubejs:incomplete_calculation_circuit', 'tfmg:capacitor_item']),
            event.recipes.create.deploying('kubejs:incomplete_calculation_circuit', ['kubejs:incomplete_calculation_circuit', 'tfmg:resistor']),
            event.recipes.create.deploying('kubejs:incomplete_calculation_circuit', ['kubejs:incomplete_calculation_circuit', 'tfmg:transistor_item']),
            event.recipes.create.deploying('kubejs:incomplete_calculation_circuit', ['kubejs:incomplete_calculation_circuit', 'tfmg:resistor']),
        ]
    )
    .transitionalItem('kubejs:incomplete_calculation_circuit')
    .loops(2),

    //engineering
    //deploying
    event.recipes.create.deploying('kubejs:coated_engineering_circuit', ['ae2:printed_silicon', 'ae2:printed_engineering_processor']),
    //etching
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "ingredients": [
            {
            "item": "kubejs:coated_engineering_circuit"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "tfmg:sulfuric_acid"
            }
        ],
        "processing_time": 100,
        "results": [
            {
            "id": "kubejs:etched_engineering_circuit"
            }
        ]
    })
    //asembly
    event.recipes.create.sequenced_assembly(
        //output
        [
            CreateItem.of('kubejs:engineering_circuit'),
        ],
        //input
        'kubejs:etched_engineering_circuit',
        //sequence
        [
            event.recipes.create.deploying('kubejs:incomplete_engineering_circuit', ['kubejs:incomplete_engineering_circuit', 'tfmg:capacitor_item']),
            event.recipes.create.deploying('kubejs:incomplete_engineering_circuit', ['kubejs:incomplete_engineering_circuit', 'tfmg:resistor']),
            event.recipes.create.deploying('kubejs:incomplete_engineering_circuit', ['kubejs:incomplete_engineering_circuit', 'tfmg:transistor_item']),
            event.recipes.create.deploying('kubejs:incomplete_engineering_circuit', ['kubejs:incomplete_engineering_circuit', 'tfmg:resistor']),
        ]
    )
    .transitionalItem('kubejs:incomplete_calculation_circuit')
    .loops(4),
    //logic
    //deploying
    event.recipes.create.deploying('kubejs:coated_logic_circuit', ['ae2:printed_silicon', 'ae2:printed_logic_processor'])
    //etching
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "ingredients": [
            {
            "item": "kubejs:coated_logic_circuit"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "tfmg:sulfuric_acid"
            }
        ],
        "processing_time": 100,
        "results": [
            {
            "id": "kubejs:etched_logic_circuit"
            }
        ]
    })
    //asembly
    event.recipes.create.sequenced_assembly(
        //output
        [
            CreateItem.of('kubejs:logic_circuit'),
        ],
        //input
        'kubejs:etched_logic_circuit',
        //sequence
        [
            event.recipes.create.deploying('kubejs:incomplete_logic_circuit', ['kubejs:incomplete_logic_circuit', 'tfmg:capacitor_item']),
            event.recipes.create.deploying('kubejs:incomplete_logic_circuit', ['kubejs:incomplete_logic_circuit', 'tfmg:resistor']),
            event.recipes.create.deploying('kubejs:incomplete_logic_circuit', ['kubejs:incomplete_logic_circuit', 'tfmg:transistor_item']),
            event.recipes.create.deploying('kubejs:incomplete_logic_circuit', ['kubejs:incomplete_logic_circuit', 'tfmg:resistor']),
        ]
    )
    .transitionalItem('kubejs:incomplete_calculation_circuit')
    .loops(4)

    //--------
    //ars
    //--------


})