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

//Update a site
router.put("/:id", async (req, res) => {
  try {
    const updatedSite = await Site.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({message: "Site updated successfully.", updatedSite : updatedSite});
    } catch (err) {
      res.status(500).json(err);
    }
});




//--------------------------------SEARCH OPERATIONS

//get all sites with possible selection

router.get("/", async (req, res) => {
  const typeofsite = req.query.typeis;
  const searchField = req.query.keyword;
  try {
    let sites;
     if (typeofsite) {
      sites = await Site.find({
        siteType: {
          $in: [typeofsite],
        },
      });
     } else if (searchField) {
      sites = await Site.find({$or: [
        { description: { $regex: searchField,$options: '$i'}},
        { siteName: { $regex: searchField,$options: '$i'}} 
      ]})
     } else {
      sites = await Site.find();
    }
      res.status(200).json(sites);
  } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router