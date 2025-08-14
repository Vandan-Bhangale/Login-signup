const employeeModel = require("../model/user")

exports.postLogin = (req,res,next) => {
    const {email,password} = req.body;
    employeeModel.findOne({email:email})
    .then(user => {
        if(!user) {
            res.json("User does not exist");
        }
        if(user.password === password) {
           req.session.isLoggedin = true;

           req.session.save(err => {
                if(err) {
                    console.log("Error while saving the session",err);
                    res.status(500).json("Internal Server Error");
                } else {
                    res.status(200).json("Login Successful");
                }
           })
        } else {
            res.status(401).json("Incorrect Password");
        }
    })
}

exports.signup = (req,res,next) => {
     employeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch((err) => res.json(err))
}

exports.getStatus = (req,res,next) => {
    if(req.session.isLoggedin) {
        res.json({loggedIn:true});
    } else {
        res.json({loggedIn:false});
    }
}