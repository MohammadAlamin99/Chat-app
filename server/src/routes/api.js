const express = require("express");
const usersController  = require("../controllers/usersController");
const authVerificationMiddleware  = require("../middleware/authVerificationMiddleware");
const router = express.Router();




router.post("/registration", usersController.registration);
router.post("/login", usersController.login);
router.get("/userFriends", usersController.userFriends);

module.exports = router;