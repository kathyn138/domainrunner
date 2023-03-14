const express = require('express');
const router = new express.Router();
const rawWeaponData = require('../data/weaponList');

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
    let reformattedWeaponData = [];

    for (const weapon in rawWeaponData) {
      let currWeapon = {};
      let { name, id, rarity } = rawWeaponData[weapon];
      let type = rawWeaponData[weapon].type.id;

      currWeapon['name'] = name;
      currWeapon['id'] = id;
      currWeapon['icon'] = `https://paimon.moe/images/weapons/${id}.png`;
      currWeapon['rarity'] = rarity;
      currWeapon['type'] = type;
      currWeapon['typeIcon'] = `https://paimon.moe/images/weapons/${type}.png`
      currWeapon['category'] = 'weapons'

      reformattedWeaponData.push(currWeapon);
    }

    // alphabetize weapons by name
    reformattedWeaponData.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

    return res.json(reformattedWeaponData);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
