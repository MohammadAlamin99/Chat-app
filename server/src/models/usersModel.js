const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    userName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    photo:{type:String},
    createdDate: {type:Date, default:Date.now()}
},{versionKey: false})

const UsersModel = mongoose.model('users', dataSchema);
module.exports = UsersModel;