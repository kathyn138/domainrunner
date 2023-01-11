const express = require("express");
const router = new express.Router();
const weaponData = require("../data/weaponList");

/**
 * route for all weapons
 * GET ?name=weapon  =>  {weapon: weapon} */

router.get("/", async function (req, res, next) {
  try {
    let reformattedWeaponData = [];

    for (weapon in weaponData) {
      let currWeapon = {};
      let { name, id, type, rarity } = weaponData[weapon];

      currWeapon['name'] = name;
      currWeapon['id'] = id;
      currWeapon['icon'] = `https://paimon.moe/images/weapons/${id}.png`;
      currWeapon['type'] = type;
      currWeapon['rarity'] = rarity;

      reformattedWeaponData.push(currWeapon);
    }


    return res.json(reformattedWeaponData);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
