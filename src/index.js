
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


app.listen(PORT ,async() => {

    try {    
        await connect();
        console.log("listening port 8080")

    } catch (e){
        console.log(e.message)
    }
})


// app.listen(8080, async()=>{
//     try {
//         await connect();
//         console.log('Server Connected Port 8080')
//     } catch (error) {
//         console.log(error)
//     }

// })