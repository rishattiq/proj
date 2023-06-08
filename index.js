const express = require('express')
const mongoose = require("mongoose");


const bodyParser = require('body-parser')
const driverroute= require('./routes/DriverRoute')
const userRoute= require('./routes/UserRoutes')
const app = express()
app.use(express.urlencoded({extended: true}));
const cors = require('cors');
app.use(cors( { origin: '*' , } ));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

app.use(bodyParser.json())



app.use('/driver', driverroute);
app.use('/user', userRoute);

mongoose
  .connect(
    
    "mongodb+srv://rishattiq:Billo1234@cluster0.scnrcle.mongodb.net/"
    )
  .then(() => {
    app.listen(8000);
    console.log("listening on port 8000")
  })
  .catch((err) => {
    console.log(err);
  });