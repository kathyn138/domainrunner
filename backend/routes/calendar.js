const express = require('express');
const router = new express.Router();
const rawCharData = require('../data/characters');
const rawWeaponData = require('../data/weaponList');
const { getAscensionItems, addToCalendar } = require('../helpers/calendar');

/**
 * route for generating calendar
 * POST /  =>
 * {
 *  monday:
 *   [{itemId: '',
 *   itemId: '',
 *   itemIcon: '',
 *   day: '',
 *   entityId: '',
 *   entityIcon: '',
 *   entityType: ''}, ...],
 *  tuesday: [...],
 *  ...,
 *  any: [...]
 * }
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
     * cart has up to two categories:
     * 'characters' and 'weapons'.
     * process each category one at a time
     * and add to calendar. 
     */
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

          addToCalendar(currEntityItems, calendar);
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
