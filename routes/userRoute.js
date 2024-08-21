const express = require("express");
const userRoute = express();
const userController = require("../controller/userController");

userRoute.use(express.json());
userRoute.use(express.urlencoded({ extended: true }));

module.exports = userRoute;