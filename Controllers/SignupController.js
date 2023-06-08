const User = require("../Models/User");

let signup = (req , res)=>{

    let {name, email, password, role} = req.body;

    let user = new User({
        name,
        email,
        password,
        role
    });

    user.save().then((user)=>{
        res.status(200).send({"Message":"User Successfully Created", user:user})
    }).catch((err)=>{
        res.status(500).send({"Message":"There was some ERROR", err:err})
        })
    
}

module.exports={
    signup

}
