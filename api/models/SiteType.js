const mongoose = require("mongoose")

const SiteTypeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
}
        
); 

module.exports = mongoose.model("SiteType", SiteTypeSchema);
