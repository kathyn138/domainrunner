const express = require('express');
const router = new express.Router();
const rawWeaponData = require('../data/weaponList');
const reformatEntityData = require('../helpers/reformatEntityData');

/**
 * route for all weapons
 * GET /  =>
 * [{name: '',
 * id: '',
 * icon: '',
 * rarity: '',
 * type: ''},
 * ...] */

router.get('/', async function (req, res, next) {
  try {
    let reformattedWeaponData = reformatEntityData(rawWeaponData, 'weapons');

    // alphabetize weapons by name
    reformattedWeaponData.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

    return res.json(reformattedWeaponData);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
