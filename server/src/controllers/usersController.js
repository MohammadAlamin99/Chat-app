const { UserRegistration, UserLogin } = require("../services/usersService");


exports.registration = async (req, res) => {
    let result = await UserRegistration(req);
    return res.status(200).json(result);
 }
 

 exports.login = async (req, res) => {
    let result = await UserLogin(req);
    return res.status(200).json(result);
 }
 