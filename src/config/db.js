const mongoose=require('mongoose');

require("dotenv").config()
const connectdb=()=>{

    return mongoose.connect("mongodb+srv://avinash:avinash1@cluster0.zsvib.mongodb.net/brandhubDatabase?retryWrites=true&w=majority");
   
}

module.exports=connectdb;