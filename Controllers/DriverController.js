const driver=require("../Models/DriverModel");

exports.getDriver = (req,res) => res.send("this is your data");

exports.createDriver = async(req,res)=>{
    
    const name=req.body.name
    const age=req.body.age
    const profile=req.body.profile
    const phoneno=req.body.phoneno
    const description=req.body.description

    let driver=new driver({
        name,
        age,
        profile,
        phoneno,
        description
    })

    driver.save().then(result=>{
        console.log('Posted');
        res.status(200).json("done added"+result)
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.allDrivers=(req,res)=> {
    console.log("Getting All driver");
    driver.find().then(driver=>{
        res.status(200).json({
            'driver':driver
        })
    }).catch(err=>{
        console.log(err);
    })
};

exports.driverInfo=(req,res)=> {
    driver.findById(req.params.id, function(err,driver){
     if(err) return next(err);
     res.send(driver);
    });
};


exports.deletedriver=(req,res)=> {
    driver.findByIdAndRemove(req.params.id, function(err,driver){
     if(err) return next(err);
     res.send("Data Deleted Successfully");
    });
};

exports.updatedriver=(req,res)=> {
    driver.findByIdAndUpdate(req.params.id,req.body,{ new: true}, function(err,driver){
     if(err) return next(err);
     res.send("Data Updated Successfully");
    });
};