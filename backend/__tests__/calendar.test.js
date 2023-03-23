const {
  getAscensionItems,
  alphabetizeItems,
  addToCalendar,
} = require('../helpers/calendar');

describe('calendar helper functions', function () {
  test('alphabetizing calendar items', function () {
    let testCal = {
      monday: [{ itemId: '_c' }, { itemId: '_a' }, { itemId: '_b' }],
      tuesday: [{ itemId: 'ayato' }, { itemId: 'amber' }],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
      any: [],
    };

    alphabetizeItems(testCal);

    expect(testCal.monday).toEqual([
      { itemId: '_a' },
      { itemId: '_b' },
      { itemId: '_c' },
    ]);

    expect(testCal.tuesday).toEqual([{ itemId: 'amber' }, { itemId: 'ayato' }]);
  });

  test('get ascension items for an entity', function () {
    let testAscension = [
      {
        items: [
          {
            item: { id: 'small_lamp_grass', name: 'Small Lamp Grass' },
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: {
              id: 'everflame_seed',
              name: 'Everflame Seed',
              rarity: 5,
              parent: 'agnidus_agate_sliver',
            },
            amount: 2,
          },
          {
            item: { id: 'small_lamp_grass', name: 'Small Lamp Grass' },
            amount: 10,
          },
        ],
        mora: 40000,
      },
    ];

    let testEntity = {
      id: 'amber',
      icon: 'genshin.com',
      type: 'pyro',
    };

    let items = getAscensionItems(testEntity, testAscension);

    expect(Object.keys(items).sort()).toEqual([
      'everflame_seed',
      'small_lamp_grass',
    ]);
    expect(items.everflame_seed.entityId).toEqual('amber');
    expect(items.everflame_seed.entityIcon).toEqual('genshin.com');
    expect(items.small_lamp_grass.day).toEqual('any');
  });

  test('adding items to calendar', function () {
    let testItems = {
      small_lamp_grass: {
        itemId: 'small_lamp_grass',
        itemIcon: 'https://paimon.moe/images/items/small_lamp_grass.png',
        day: ['monday'],
        entityId: 'amber',
        entityIcon: 'genshin.com',
        entityType: 'pyro',
      },
      everflame_seed: {
        itemId: 'everflame_seed',
        itemIcon: 'https://paimon.moe/images/items/everflame_seed.png',
        day: ['tuesday'],
        entityId: 'amber',
        entityIcon: 'genshin.com',
        entityType: 'pyro',
      },
    };

    let testCal = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
      any: [],
    };

    addToCalendar(testItems, testCal);

    expect(testCal.monday[0].itemId).toEqual('small_lamp_grass');
    expect(testCal.tuesday[0].itemId).toEqual('everflame_seed');
  });
});
