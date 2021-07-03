const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

/*
//test
router.get('/', (req,res)=>{
    res.send('Hello world')
}) */
//create (register)

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

module.exports = router