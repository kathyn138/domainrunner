const express = require('express');
const router = new express.Router();
const rawCharData = require('../data/characters');
const rawWeaponData = require('../data/weaponList');
const rawItemData = require('../data/itemList');

/**
 * route for generating calendar
 * GET /  =>
 * [{name: '',
 * id: '',
 * icon: '',
 * rarity: '',
 * type: '',
 * ...}] */

router.get('/', async function (req, res, next) {
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

    //TODO: add comments

    function formatItemData(rawItem) {
      const { id, day } = rawItem;
      let formattedItem = {};

      formattedItem['itemId'] = id;
      formattedItem['itemIcon'] = `https://paimon.moe/images/items/${id}.png`;

      if (!day) {
        formattedItem['day'] = 'any';
      } else {
        formattedItem['day'] = [...day];
      }

      return formattedItem;
    }

    // for a given entity,
    // non repeating items
    function getAscensionItems(id, category, ascensionLevels) {
      let items = {};

      for (const a of ascensionLevels) {
        for (const i of ascensionLevels[a]) {
          let currRawItem = ascensionLevels[a][i][item];

          if (!items[currRawItem[id]]) {
            let formattedItem = formatItemData(currRawItem);

            formattedItem['entityId'] = id;
            formattedItem[
              'entityIcon'
            ] = `https://paimon.moe/images/${category}/${id}.png`;

            items[formattedItem];
          }
        }
      }

      return items;
    }

    function addToCalendar(charItems) {
      for (let currItem in charItems) {
        let availableDays = currItem[day];

        if (availableDays === 'any') {
          calendar['any'] = currItem;
        } else {
          for (const day of availableDays) {
            calendar[day].push(...currItem);
          }
        }
      }
    }

    function processCart(cart, category, rawData) {
      if (cart.length) {
        for (const entity of cart) {
          let currEntityItems = getAscensionItems(
            entity,
            category,
            rawData[ascension]
          );
    
          addToCalendar(currEntityItems);
        }
      }
    }

    processCart(req.characters, 'characters', rawCharData);
    processCart(req.weapons, 'weapons', rawWeaponData);

    //TODO: sort items in calendar alphabetically

    return res.json(calendar);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
