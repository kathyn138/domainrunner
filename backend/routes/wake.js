// Route to wake up the backend

const express = require('express');
const router = new express.Router();

router.get('/', async function (req, res, next) {
  try {
    return res.json('hi i\'m awake, sanity check');
  } catch (err) {
    return next(err);
  }
});

module.exports = router;