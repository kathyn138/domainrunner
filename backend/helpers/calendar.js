const { formatItemData } = require('./formatData');

/**
 * structure of ascension data:
 * array of obj, where each obj represents
 * an ascension level and its required items
 * [
 *  {
 *    items: [{items: [{item, ...}, ...], ...}]
 *  },
 *  {...}
 * ]
 */
function getAscensionItems(entity, ascension) {
  let items = {};

  for (const level in ascension) {
    for (const itemList in ascension[level]) {
      for (const i in ascension[level][itemList]) {
        let currRawItem = ascension[level][itemList][i].item;

        /**
         * some items repeat across ascension levels.
         * want to generate unique entity item pairings
         */
        if (!items[currRawItem.id]) {
          let formattedItem = formatItemData(currRawItem);

          formattedItem['entityId'] = entity.id;
          formattedItem['entityIcon'] = entity.icon;
          formattedItem['entityType'] = entity.type;

          items[currRawItem.id] = formattedItem;
        }
      }
    }
  }

  return items;
}

// sort items in each day alphabetically
function alphabetizeItems(cal) {
  for (const day in cal) {
    /**
     * can't a.itemId - b.itemId bc need to convert str to num
     * either use ternary or localeCompare()
     */
    cal[day].sort((a, b) =>
      a.itemId < b.itemId ? -1 : a.itemId > b.itemId ? 1 : 0
    );
  }
}

/**
 * organize items by days
 * then alphabetize items
 */
function addToCalendar(items, cal) {
  for (let currItem in items) {
    let availableDays = items[currItem].day;

    if (availableDays === 'any') {
      cal['any'].push(items[currItem]);
    } else {
      for (const day of availableDays) {
        cal[day].push(items[currItem]);
      }
    }
  }

  alphabetizeItems(cal);
}

module.exports = { getAscensionItems, alphabetizeItems, addToCalendar };
