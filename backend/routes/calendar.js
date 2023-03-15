const express = require('express');
const router = new express.Router();
const rawCharData = require('../data/characters');
const rawWeaponData = require('../data/weaponList');

/**
 * route for generating calendar
 * POST /  =>
 * {monday: [{itemId: '',
 * itemId: '',
 * itemIcon: '',
 * day: '',
 * entityId: '',
 * entityIcon: '',
 * entityType: ''}, ...],
 * tuesday: [...],
 * ...
 * any: [...]} 
 * */

router.post('/', async function (req, res, next) {
  try {
    let calendar = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
      any: [],
    };

    /**
     * rawItem data has excess info
     * desired data structure for each formatted item:
     * { itemId: '...', itemIcon: '...', day: [...] }
     */
    function formatItemData(rawItem) {
      const { id, day } = rawItem;
      let formattedItem = {};

      formattedItem['itemId'] = id;
      formattedItem['itemIcon'] = `https://paimon.moe/images/items/${id}.png`;

      // not all items have limited availability
      if (!day) {
        formattedItem['day'] = 'any';
      } else {
        formattedItem['day'] = [...day];
      }

      return formattedItem;
    }

    /**
     * structure of ascension:
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

    // sort items in calendar alphabetically
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
     * organize entity item pairings by days
     * then alphabetize items
     */
    function addToCalendar(charItems) {
      for (let currItem in charItems) {
        let availableDays = charItems[currItem].day;

        if (availableDays === 'any') {
          calendar['any'].push(charItems[currItem]);
        } else {
          for (const day of availableDays) {
            calendar[day].push(charItems[currItem]);
          }
        }
      }

      alphabetizeItems(calendar);
    }

    function processCart(cart) {
      if (cart.length) {
        for (const entity of cart) {
          let dataCategory;

          if (entity.category === 'characters') {
            dataCategory = rawCharData;
          } else {
            dataCategory = rawWeaponData;
          }

          let currEntityItems = getAscensionItems(
            entity,
            dataCategory[entity.id].ascension
          );

          addToCalendar(currEntityItems);
        }
      }
    }

    processCart(req.body);

    return res.json(calendar);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
