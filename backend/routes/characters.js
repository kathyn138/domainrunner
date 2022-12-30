const express = require("express");
const router = new express.Router();
const axios = require("axios");

/**
 * route for searching by villager name
 * GET ?name=villager  =>  {villager: villager} */

router.get("/", async function (req, res, next) {
  try {
    const allCharCall = await axios.get(
      "https://api.genshin.dev/characters/all"
    );
    let allCharData = allCharCall.data;

    const allCharIdCall = await axios.get(
      "https://api.genshin.dev/characters"
    );
    let allCharIds = allCharIdCall.data;

    let reformattedCharData = [];
    // works bc lengths of allCharData and allCharIds are the same
    let i = 0;

    // todo: add image
    for (char of allCharData) {
      let currChar = {};
      currChar['name'] = char['name'];
      currChar['id'] = allCharIds[i];
      currChar['vision'] = char['vision'];
      reformattedCharData.push(currChar);
      i++;
    }


    return res.json(reformattedCharData);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
