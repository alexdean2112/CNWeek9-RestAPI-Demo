// <------- Imports ------->

const User = require("./userModel");
const jwt = require("jsonwebtoken");

// <------- Controllers ------->

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        const token = await jwt.sign({_id: newUser._id}, process.env.SECRET);
        res.status(200).send({user: newUser, token});
    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
};


exports.readUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send({users: users});
    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
}

exports.updateUser = async (req, res) => {
    try {
        await User.updateOne(req.body.filter, {$set: req.body.update});
        res.status(200).send({previousUser: req.body.filter, newUser: req.body.update });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.deleteOne(req.body);
        res.status(200).send({deletedUser: req.body});
    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
};

exports.loginUser = async (req, res) => {
    try {
        const token = await jwt.sign({_id: req.user._id}, process.env.SECRET);
        res.status(200).send({user: req.user.username, token, message: "Successfully logged in"});
    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
}
