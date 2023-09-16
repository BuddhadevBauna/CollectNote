import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/note_routes.js";

//Database connection
mongoose.connect(process.env.MONGO_URI);

//initialize node server
const server = express();

//middleware
server.use(cors());
server.use(bodyParser.json());
//use routes
server.use('/notes', router);


//Run server on port 8080
const port = 8080;
server.listen(port,() => {
    console.log(`The server is running on port ${port}...`);
})