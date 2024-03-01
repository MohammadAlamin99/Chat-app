const massageModel = require("../models/massageModel");

exports.message = async (req) => {
    try {
        let reqBody = req.body;
        let result = await massageModel.create(reqBody);
        return {status:"success", message:result}
    } catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}