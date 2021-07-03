const mongoose = require("mongoose")

const SiteSchema = new mongoose.Schema({
    siteName:{
        Type:String,
        required:true,
        unique:true
    },
    photo:{
        Type:String,
        required:true
    },
    description:{
        Type:String,
        required:true,
    },
    siteType:{
        type:Array,
        required:true,
    }
},
    { timestamps:true}
); 


module.exports = mongoose.model("Site", UserSchema);
