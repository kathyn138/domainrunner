const express = require("express");
const router = new express.Router();
const axios = require("axios");

/**
 * route for searching by character name
 * GET ?name=character  =>  {character: character} */

router.get("/", async function (req, res, next) {
  try {
    // character id and data are stored separately on api
    
    const allCharIdCall = await axios.get(
      "https://api.genshin.dev/characters"
    );
    let allCharIds = allCharIdCall.data;

    const allCharCall = await axios.get(
      "https://api.genshin.dev/characters/all"
    );
    let allCharData = allCharCall.data;


    let reformattedCharData = [];
    // works bc lengths of allCharData and allCharIds are the same
    let i = 0;

    for (char of allCharData) {
      let currChar = {};
      currChar['name'] = char['name'];
      currChar['id'] = allCharIds[i];
      currChar['icon'] = `https://api.genshin.dev/characters/${allCharIds[i]}/icon`;
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
