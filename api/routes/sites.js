const express = require("express");
const router = express.Router();
const Site = require("../models/Site");

//create new site
router.post("/addSite", async (req, res) => {
    const newSite = new Site(req.body);
    try {
      const savedSite = await newSite.save();
      res.status(200).json(savedSite);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router

//delete a site
