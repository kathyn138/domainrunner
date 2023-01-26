const express = require("express");
const router = new express.Router();
const itemData = require("../data/itemList");

/**
 * route for all items
 * GET /  =>  
 * [{name: '', 
 * id: '', 
 * icon: '', 
 * rarity: '', 
 * day: [...], 
 * ...}] */

router.get("/", async function (req, res, next) {
  try {
    let reformattedItemData = [];

    for (item in itemData) {
      let currItem = {};
      let { name, id, day, rarity } = itemData[item];

      currItem['name'] = name;
      currItem['id'] = id;
      currItem['icon'] = `https://paimon.moe/images/items/${id}.png`;
      currItem['rarity'] = rarity;

      // not all items have limited availability

      if (!day) {
        currItem['day'] = 'any';
      } else {
        currItem['day'] = day;
      }

      reformattedItemData.push(currItem);
    }

    return res.json(reformattedItemData);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
