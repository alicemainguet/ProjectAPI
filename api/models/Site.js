const mongoose = require("mongoose")

const SiteSchema = new mongoose.Schema({
    siteName:{
        type:String,
        required:true,
        unique:true
    },
    photo:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    siteType:{
        type:Array,
        required:true,
    }
},
    { timestamps:true}
); 


module.exports = mongoose.model("Site", SiteSchema);
