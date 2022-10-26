// <------- Imports ------->

const mongoose = require("mongoose");

// <------- User Model ------->

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    lead_actor: {
        type: String,
        default: "Not Specififed"
    },
    director: {
        type: String,
        default: "Not Specififed"
    }
});

const Movie = mongoose.model("Movie", userSchema);

// <------- Exports ------->

module.exports = Movie;