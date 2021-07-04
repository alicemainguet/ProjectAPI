const mongoose = require("mongoose")

const SubscriberSchema = new mongoose.Schema({
    subscriberId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required:true,
    },
},
    { timestamps:true}
); 


module.exports = mongoose.model("Subscriber", SubscriberSchema);
