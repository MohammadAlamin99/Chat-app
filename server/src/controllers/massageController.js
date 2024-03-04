const { message, getMessage } = require("../services/massageService");


exports.message = async (req, res) => {
    let result = await message(req);
    return res.status(200).json(result);
 }

exports.getMessage = async (req, res) => {
    let result = await getMessage(req);
    return res.status(200).json(result);
 }