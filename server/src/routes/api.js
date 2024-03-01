const express = require("express");
const usersController  = require("../controllers/usersController");
const massageController  = require("../controllers//massageController");
const authVerificationMiddleware  = require("../middleware/authVerificationMiddleware");
const router = express.Router();




router.post("/registration", usersController.registration);
router.post("/login", usersController.login);
router.get("/userFriends",authVerificationMiddleware, usersController.userFriends);
router.post("/message",authVerificationMiddleware, massageController.message);

module.exports = router;