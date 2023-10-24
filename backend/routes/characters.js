const express = require('express');
const router = new express.Router();
const rawCharData = require('../data/characters');
const { formatEntityData } = require('../helpers/formatData');

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

    // alphabetize characters by name
    formattedCharData.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

    return res.json(formattedCharData);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
