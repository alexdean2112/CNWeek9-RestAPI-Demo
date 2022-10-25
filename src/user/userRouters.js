// <------- Imports ------->

const { Router } = require("express");
const { createUser, readUsers, deleteUser, updateUser, loginUser } = require("./userControllers");
const { hashPass } = require("../middleware/index")

// <------- Routes ------->

const userRouter = Router();

userRouter.post("/createUser", hashPass, createUser);
userRouter.post("/loginUser", loginUser )
userRouter.get("/readUsers",  readUsers);
userRouter.put("/updateUser", updateUser);
userRouter.delete("/deleteUser", deleteUser);

// <------- Exports ------->

module.exports = userRouter;
