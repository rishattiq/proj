const User = require("../Models/User");
const jwt = require("jsonwebtoken")

let login = (req, res)=>{

    let{email, password} = req.body;


    User.findOne({email:email}).then((foundUser)=>{
        if(!foundUser){
            res.status(404).send({"Message":"User Not FOUND"})
        }else{
            if(foundUser.password == password){
                let token = jwt.sign({
                    id:foundUser._id,
                    role:foundUser.role
                },
               "rish",{
                    expiresIn: '5h'
                })
                
                res.status(200).send({"Message":"Successfully LOGGED IN", User:foundUser, token:token, role:foundUser.role})
            }else{
                res.status(500).send({"Message":"Invalid Password"})
            }
        }
    })
}

let findEmail = (req, res) => {

    let {email} = req.query;

    User.findOne({email:email}).then((foundUser)=>{
        if(!foundUser){
            res.status(404).send({"Message":"User Not FOUND"})
        }
        else{
            const random =  Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
            const otp = random.toString();
            res.status(200).send({otp,user:foundUser._id});
        }
    });

}

let updatePassword = async (req, res) =>{

    let {email, password} = req.body;

try{
    const result = await User.updateOne({ email: email },{ $set:{ password: password }});
    if(result){
        res.status(200).send({'message':'Password Changed!'});
    }
}
catch{
    res.status(404).send({'message':'Something went wrong!'});
}
    

}

module.exports={
    login,
    findEmail,
    updatePassword
}