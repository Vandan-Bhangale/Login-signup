const employeeModel = require("../model/user")

exports.postLogin = (req,res,next) => {
    const {email,password} = req.body;
    employeeModel.findOne({email:email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("Incorrect Password")
            }
        } else {
            res.json("Uesr does not exist");
        }
    })
}

exports.signup = (req,res,next) => {
     employeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch((err) => res.json(err))
}