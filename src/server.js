// <------- Imports ------->

require("./db/connection");
const express = require("express");
const userRouter = require("./user/userRouters");
const movieRouter = require("./movies/movieRouters");

// <------- Web Server Configuration ------->

const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());

app.use(userRouter);
app.use(movieRouter);

app.listen(port, () => {
    console.log(`Listening to Port ${port}`);
})
