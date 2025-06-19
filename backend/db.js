import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const URL=process.env.DB_URL;
const connectdb=()=>{
    try{
    mongoose.connect(URL);
    console.log("Mongodb Connected Successfully !!");
    }catch(err){
        err.message;
    }
}

export default connectdb;