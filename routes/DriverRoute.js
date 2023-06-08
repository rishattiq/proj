const express=require("express");
const Router=express.Router();
const jwt = require("jsonwebtoken")
const cors =require("cors");
const adddriverController=require("../Controllers/DriverController");


const verifyToken = (req, res, next) => {
    
    let token = req.headers['token']
    console.log("Verifying");
    jwt.verify(token, 'rish', (err, decoded)=>{
        if(!err){
            req.decoded = decoded;
            next();
        }else{
            res.status(500).send({"Message":"Not Authorized"})
        }
    })
}

Router.get("/getDriver",verifyToken,adddriverController.getDriver)
Router.post("/adddriver",verifyToken,adddriverController.createDriver)
Router.get("/alldriver",verifyToken,adddriverController.allDrivers)
Router.get("/:id",verifyToken,adddriverController.driverInfo)
Router.delete("/:id",verifyToken,adddriverController.deletedriver)
Router.put("/:id",verifyToken,adddriverController.updatedriver)


module.exports = Router;