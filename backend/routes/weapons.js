const express = require("express");
const router = new express.Router();
const axios = require("axios");

/**
 * route for searching by weapon name
 * GET ?name=weapon  =>  {weapon: weapon} */

router.get("/", async function (req, res, next) {
  try {
    // weapon id and data are stored separately on api
    
    const allWeaponIdCall = await axios.get(
      "https://api.genshin.dev/weapons"
    );
    let allWeaponIds = allWeaponIdCall.data;

    const allWeaponCall = await axios.get(
      "https://api.genshin.dev/weapons/all"
    );
    let allWeaponData = allWeaponCall.data;


    let reformattedWeaponData = [];
    // works bc lengths of allWeaponData and allWeaponIds are the same
    let i = 0;

    // todo: add image
    for (weapon of allWeaponData) {
      let currWeapon = {};
      currWeapon['name'] = weapon['name'];
      currWeapon['id'] = allWeaponIds[i];
      currWeapon['icon'] = `https://api.genshin.dev/characters/${allWeaponIds[i]}/icon`;
      currWeapon['type'] = weapon['type'];
      reformattedWeaponData.push(currWeapon);
      i++;
    }


    return res.json(reformattedWeaponData);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
