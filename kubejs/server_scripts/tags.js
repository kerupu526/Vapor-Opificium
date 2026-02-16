ServerEvents.tags('item', event => {
    event.remove('twilightforest:portal/activator', 'minecraft:diamond');
    event.add('twilightforest:portal/activator', 'avaritia:infinity_catalyst');

    event.add('kubejs:coins', [
        'kubejs:survivor_coin',
        'kubejs:farmer_coin',
        'kubejs:cook_coin',
        'kubejs:miner_coin',
        'kubejs:explorer_coin',
        'kubejs:technician_coin',
        'kubejs:chemist_coin',
        'kubejs:energy_coin'
    ]);

    event.add('forge:leather', 'kubejs:tanned_leather');
});