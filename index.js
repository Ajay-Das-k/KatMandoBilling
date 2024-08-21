const dotenv=require('dotenv').config()
const PORT = process.env.PORT || 4000
const dbConnect=require("./config/dbConnect")
const morgan=require("morgan")

const express = require("express");
const app = express();
dbConnect.dbConnect();
app.use(morgan("dev"))

//for user routes
const userRoute = require('./routes/userRoute');
app.use("/",userRoute);



app.listen(PORT, 
  () => console.log(`Server is running At http://localhost:${PORT}`))