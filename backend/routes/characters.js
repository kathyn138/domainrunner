const express = require('express');
const router = new express.Router();

const charData = require("../data/characters");

/**
 * route for all characters
 * GET /  =>  
 * [{name: '', 
 * id: '', 
 * icon: '', 
 * rarity: '', 
 * element: {...}, 
 * ...}] */

router.get("/", async function (req, res, next) {
  try {
    let reformattedCharData = [];

    for (char in charData) {
      let currChar = {};
      let { name, id, rarity } = charData[char];
      let element = charData[char].element.id;

      currChar['name'] = name;
      currChar['id'] = id;
      currChar['icon'] = `https://paimon.moe/images/characters/${id}.png`;
      currChar['rarity'] = rarity;
      currChar['element'] = element;

      reformattedCharData.push(currChar);
    }

    return res.json(reformattedCharData);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
