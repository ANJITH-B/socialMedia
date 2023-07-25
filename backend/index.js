import bodyParser from "body-parser";
const express = require('express')
import { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import {register} from "./controllers/auth"


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename );
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet()); 
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets",express.this.static(path.join(__dirname, 'public/assets')));

// file storage

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,"public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });

//route with files

app.post("/auth/register",upload.single("picture"),register);


// Mongoose connection

const PORT = process.env.PORT || 6000;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopoly: true,
}).then(()=>{
    app.listen(PORT,()=> console.log(`Server Port: ${PORT}`));
}).catch((error)=> console.log(`${error} did not connect Port`));