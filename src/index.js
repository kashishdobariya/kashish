const express = require("express");
const connectDB = require("./db/dbconnection");
const  router  = require("./Routes/v1");


const app = express()

app.listen (8000,() =>{
    console.log("server is running 8000")

})

app.use(express.json())

app.use("/v1", router)



connectDB() 