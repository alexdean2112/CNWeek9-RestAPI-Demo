// <------- Imports ------->

const Movie = require("./movieModel");
const jwt = require("jsonwebtoken");

// <------- Controllers ------->

exports.createMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).send({createdMovie: newMovie});
    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
};


exports.readMovies = async (req, res) => {
    try {
        const Movies = await Movie.find({});
        res.status(200).send({Movies: Movies});
    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
}

exports.updateMovie = async (req, res) => {
    try {
        await Movie.updateOne(req.body.filter, {$set: req.body.update});
        res.status(200).send({previousMovie: req.body.filter, newMovie: req.body.update });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
}

exports.deleteMovie = async (req, res) => {
    try {
        await Movie.deleteOne(req.body);
        res.status(200).send({deletedMovie: req.body});
    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
};
