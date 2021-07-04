
/*
const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

router.get('/', async (req, res) => {
    try {
      const subscribers = await Subscriber.find()
      res.json(subscribers)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

//UPDATE A USER
/*
router.post("/register", async (req,res)=>{
    try{
        
    }catch(err) {
        res.status(500).json(err);
    }

});


module.exports = router
*/
