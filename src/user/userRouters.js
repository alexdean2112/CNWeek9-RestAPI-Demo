// <------- Imports ------->

const { Router } = require("express");
const { createUser, readUsers, } = require("./userControllers");

// <------- Routes ------->

const userRouter = Router();

userRouter.post("/createUser", createUser);
userRouter.get("/readUsers", readUsers);

// <------- Exports ------->

module.exports = userRouter;
