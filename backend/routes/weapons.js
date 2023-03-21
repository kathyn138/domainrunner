const express = require('express');
const router = new express.Router();
const rawWeaponData = require('../data/weaponList');
const { formatEntityData } = require('../helpers/formatData');

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
    let formattedWeaponData = formatEntityData(rawWeaponData, 'weapons');

    // alphabetize weapons by name
    formattedWeaponData.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

    return res.json(formattedWeaponData);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
