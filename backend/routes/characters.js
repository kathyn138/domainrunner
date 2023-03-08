const express = require('express');
const router = new express.Router();
const rawCharData = require("../data/characters");

/**
 * route for all characters
 * GET /  =>  
 * [{name: '', 
 * id: '', 
 * icon: '', 
 * rarity: '', 
 * type: '', 
 * ...}] */

router.get("/", async function (req, res, next) {
  try {
    let reformattedCharData = [];

    for (const char in rawCharData) {
      let currChar = {};
      let { name, id, rarity } = rawCharData[char];
      let type = rawCharData[char].element.id;

      currChar['name'] = name;
      currChar['id'] = id;
      currChar['icon'] = `https://paimon.moe/images/characters/${id}.png`;
      currChar['rarity'] = rarity;
      currChar['type'] = type;
      currChar['typeIcon'] = `https://paimon.moe/images/elements/${type}.png`
      currChar['category'] = 'characters'

      reformattedCharData.push(currChar);
    }

    return res.json(reformattedCharData);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
