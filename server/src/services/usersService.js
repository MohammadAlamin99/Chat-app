const UsersModel = require("../models/usersModel");
const jwt = require("jsonwebtoken");


// user Registration
exports.UserRegistration = async (req) => {
    try {
        let reqBody = req.body;
        await UsersModel.create(reqBody);
        return {status:"success", message:"Regestaration Successfully"}
    } catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}

// user Login
exports.UserLogin = async (req)=>{
    try {
        let reqBody = req.body;
        let data = await UsersModel.aggregate([
            {$match:reqBody},
            {$project:{"password":0,"createdDate":0 }}
        ])
 
        if(data.length>0){
           let payload = {
            data:data[0]['email'],
            id:data[0]['_id']
            
        };  //token create process eikhane email take jwt .sing er moddy diya token banano hoyece..ekhn jodi cai taholy email er sathy ro kisu add korte pari
           let token = jwt.sign(payload, 'bcd123');   //jwt.sing er maddome token create kora hoy
           return({status:"success",token:token, data:data[0]})
        }
        else{
            return {status:"fail", message:"something went wrong"}
        }

    } catch (e) {
        console.log(e)
        return {status:"fail", message:"something went wrong"}
    }
}


// Searching User for Friends
exports.UserFriends = async (req) => {
    try {
        let data = await UsersModel.find();
        return {status:"success", data:data}
    } catch (e) {
        return {status:"fail", message:e}
    }
}