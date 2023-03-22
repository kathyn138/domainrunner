const { formatEntityData, formatItemData } = require('../helpers/formatData');

describe('format data functions', function () {
  test('return formated entity data', function () {
    let rawEntityTestData = {
      amber: {
        id: 'amber',
        name: 'Amber',
        rarity: 4,
        weapon: 'bow',
        stats: {
          hp: 9461,
          atk: 223,
          def: 601,
        },
        element: { id: 'pyro' },
      },
    };
    let entityData = formatEntityData(rawEntityTestData, 'characters');

    expect(entityData[0]).not.toContain('stats');
    expect(entityData[0].id).toEqual('amber');
    expect(entityData[0].category).toEqual('characters');
    expect(entityData[0].type).toEqual('pyro');
  });

  test('return formatted item data with day array', function () {
    let rawItemTestData = {
      id: 'guide_to_prosperity',
      name: 'Guide to Prosperity',
      day: ['monday', 'thursday'],
      rarity: 3,
      parent: 'teachings_of_prosperity',
    };

    let itemData = formatItemData(rawItemTestData);

    expect(itemData).not.toContain('parent');
    expect(itemData.day).toEqual(['monday', 'thursday']);
  });

  test('return formatted item data with day value as any', function () {
    let rawItemTestData = {
      id: 'crystalline_bloom',
      name: 'Crystalline Bloom',
      rarity: 5,
    };

    let itemData = formatItemData(rawItemTestData);

    expect(itemData).not.toContain('rarity');
    expect(itemData.day).toEqual('any');
  });
});
