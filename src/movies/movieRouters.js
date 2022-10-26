// <------- Imports ------->

const { Router } = require("express");
const { createMovie, readMovies, deleteMovie, updateMovie } = require("./movieControllers");
const { tokenCheck } = require("../middleware/index")

// <------- Routes ------->

const movieRouter = Router();

movieRouter.post("/createMovie", tokenCheck, createMovie );
movieRouter.get("/readMovies", tokenCheck, readMovies );
movieRouter.put("/updateMovie", tokenCheck, updateMovie );
movieRouter.delete("/deleteMovie", tokenCheck, deleteMovie );

// <------- Exports ------->

module.exports = movieRouter;