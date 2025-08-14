const express = require('express');
const routes = express.Router();
const userController = require("../controller/userController")

routes.post("/login",userController.postLogin);
routes.post("/register",userController.signup);
routes.get("/status",userController.getStatus);

module.exports = routes;