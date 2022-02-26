import express from "express";
import mongoose from "mongoose";

import router from "./router/index.router";

const app = express();

app.use([
    express.json(),
    express.urlencoded({ extended: true })
])

app.use('/api', router);

mongoose.connect("mongodb://localhost:27017/test")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen('5050', () => {
            console.log('Server is running on port 5050');
        })
    })
    .catch(err => {
        console.error(err);
    })
