
const mongoose = require("mongoose");

const ShirtSchema = new mongoose.Schema({

    imgUrl : {type : String , required : true },
    price : {type : Number , required : true },
    size : {type : String , required : true },
    colour : {type : String , required : true }
   
})

module.exports = mongoose.model("shirt", ShirtSchema)