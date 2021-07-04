
const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");



//user registration
router.post("/register", async (req,res)=>{
    try{
        const newSubscriber = new Subscriber({
            subscriberId: req.body.subscriberId,
            email: req.body.email,
            password: req.body.password,
        })
        const subscriber = await newSubscriber.save();
        res.status(200).json(subscriber);
    }catch(err) {
        res.status(500).json(err);
    }

});

//login 
router.post("/login", async (req, res) => {
    try {
      const subscriber = await Subscriber.findOne({ subscriberId: req.body.subscriberId });
      !subscriber && res.status(400).json("user not found!");
      if (req.body.password == subscriber.password) {
        return res.status(200).json(subscriber);
      } else {
        res.status(400).json("incorrect password");
      }
      res.status(200).json(subscriber);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router
 
