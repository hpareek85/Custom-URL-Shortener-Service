// all the short url we create have them work
// Redirect short url to long url

const express = require("express");
const router = express.Router();

const Url = require("../models/Url");

//@routes  Get /:code
// @desc  redirect to long/original Url

router.get("/:code", async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json("No url found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
});
module.exports = router;
