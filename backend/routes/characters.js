const express = require("express");
const router = new express.Router();
const axios = require('axios');
// const Villager = require("../models/villager");

/** 
 * route for searching by villager name
 * GET ?name=villager  =>  {villager: villager} */

router.get("/", async function (req, res, next) {
  try {
    const villager = await axios.get("https://api.genshin.dev/characters/amber");
    let test = res.json(villager.data);
    return test;
  } catch (err) {
    return next(err);
  }
});


module.exports = router;