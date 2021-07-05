
const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");



//user registration
/*
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
*/ 

//user registration : alternative?
router.post("/register", async (req, res) => {
  const newSubscriber = new Subscriber(req.body);
  try {
    const savedSubscriber = await newSubscriber.save();
    res.status(200).json(savedSubscriber);
  } catch (err) {
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

//get all users
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find()
    res.json(subscribers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

//get one user
router.get("/:id", async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id)
    if (subscriber == null) {
      return res.status(404).json({ message: 'Cannot find subscriber' })
    }
    res.status(200).json(subscriber);
  } catch (err) {
    res.status(500).json(err);
  }
});


//delete a subscriber 
router.delete('/:id', async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id)
    if (subscriber == null) {
      return res.status(404).json("Cannot find subscriber")
    }
    await subscriber.remove()
    res.json("subscriber deleted successfully")
  } catch (err) {
    res.status(500).json(err)
  }
})


//update user
//add if time!

module.exports = router
 
