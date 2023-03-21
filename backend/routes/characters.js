const express = require('express');
const router = new express.Router();
const rawCharData = require('../data/characters');
const reformatEntityData = require('../helpers/reformatEntityData');

/**
 * route for all characters
 * GET /  =>  
 * [{name: '', 
 * id: '', 
 * icon: '', 
 * rarity: '', 
 * type: ''}, 
 * ...] */

router.get("/", async function (req, res, next) {
  try {
    let reformattedCharData = reformatEntityData(rawCharData, 'characters')

    return res.json(reformattedCharData);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
