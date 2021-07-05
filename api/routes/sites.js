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

//get one site
router.get("/:id", async (req, res) => {
  try {
    const site = await Site.findById(req.params.id)
    if (site == null) {
      return res.status(404).json({ message: 'Cannot find site in database' })
    }
    res.status(200).json(site);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all sites
/*
router.get('/', async (req, res) => {
  try {
    const sites = await Site.find()
    res.json(sites)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});
*/ 


//get all sites with possible selection
router.get("/", async (req, res) => {
  const typeofsite = req.query.typeis;
  try {
    let sites;
     if (typeofsite) {
      sites = await Site.find({
        siteType: {
          $in: [typeofsite],
        },
      });
     } else {
      sites = await Site.find();
    }
      res.status(200).json(sites);
  } catch (err) {
      res.status(500).json(err);
    }
  });



//delete a site 
router.delete('/:id', async (req, res) => {
  try {
    const site = await Site.findById(req.params.id)
    if (site == null) {
      return res.status(404).json("Cannot find site")
    }
    await site.remove()
    res.json("site deleted successfully")
  } catch (err) {
    res.status(500).json(err)
  }
})




module.exports = router