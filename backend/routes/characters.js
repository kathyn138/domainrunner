const express = require('express');
const router = new express.Router();
const rawCharData = require('../data/characters');
const formatEntityData = require('../helpers/formatData');

/**
 * route for all characters
 * GET /  =>
 * [{name: '',
 * id: '',
 * icon: '',
 * rarity: '',
 * type: ''},
 * ...] */
router.get('/', async function (req, res, next) {
  try {
    let formattedCharData = formatEntityData(rawCharData, 'characters');

    return res.json(formattedCharData);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
