
const massageModel = require("../models/massageModel");
const cloudinary = require("../middleware/cludinary")

exports.message = async (req) => {
    try {
        let reqBody = req.body;
        let result = await massageModel.create(reqBody);
        return {status:"success", message:result}
    } catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}

exports.getMessage = async (req) => {
    try {
        let myId = req.headers.id;
        let fdId = req.params.id;
        let result = await massageModel.find({
            $or:[
                {senderId:myId, receverId:fdId},
                {receverId:myId, senderId:fdId }
               ]
               
        });
        return { status: "success", message: result };
    } catch (e) {
        return { status: "fail", message: "Something Went Wrong" };
    }
};





exports.sendImageMessage = async (req) => {
    try {
        let reqBody = req.body;
        // Upload image to Cloudinary
        let result = await cloudinary.uploader.upload(req.file.path);
        
        // Get the Cloudinary URL for the uploaded image
        let imageUrl = result.secure_url;
        
        // Add the image URL to the request body
        reqBody.image = imageUrl;
        
        // Create a record in your database with the image URL
        let savedRecord = await massageModel.create(reqBody);
        
        return {status:"success", message:savedRecord};
    } catch (e) {
        console.log(e)
        return {status:"fail", message:"Something Went Wrong"};
    }
}



