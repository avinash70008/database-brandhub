
const express = require("express");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())

require("dotenv").config()



const connect = require("./config/db")

const shirtController = require("./controllers/shirtController")
app.use("/" , shirtController)

const tshirtController = require("./controllers/tshirtController")
app.use("/" , tshirtController)



const {register,login} = require("./controllers/userController")
app.post("/register",register)
app.post("/login",login)




app.listen( process.env.PORT||5000, async()=>{
    try {
        await connect();
        console.log('Server Connected Success')
    } catch (error) {
        console.log(error)
    }

})
