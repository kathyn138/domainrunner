/**
 * iterate through rawData
 * and gather only necessary info.
 * category is 'characters' or 'weapons'.
 * type is divisons within categories, eg bow.
 * => 
 * [{name: '',
 * id: '',
 * icon: '',
 * rarity: '',
 * type: '',
 * category: '',
 * typeIcon: ''},
 * ...]
 */

function reformatEntityData(rawData, category) {
  let reformattedEntityData = [];

  for (const entity in rawData) {
    let currEntity = {};
    let { name, id, rarity } = rawData[entity];
    let type;

    /**
     * key for type different b/w char & weapon
     * characters use 'element'
     * weapons use 'type
     */
    if (category === 'characters') {
      type = rawData[entity].element.id;
    } else {
      type = rawData[entity].type.id;
    }

    currEntity['name'] = name;
    currEntity['id'] = id;
    currEntity['icon'] = `https://paimon.moe/images/${category}/${id}.png`;
    currEntity['rarity'] = rarity;
    currEntity['type'] = type;
    currEntity['category'] = category;

    let typeIconSrc;

    if (category === 'characters') {
      typeIconSrc = `https://paimon.moe/images/elements/${type}.png`;
    } else {
      typeIconSrc = `https://paimon.moe/images/weapons/${type}.png`
    }

    currEntity['typeIcon'] = typeIconSrc;

    reformattedEntityData.push(currEntity);
  }

  return reformattedEntityData;
}

module.exports = reformatEntityData;
