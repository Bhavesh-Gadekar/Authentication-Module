import cors from "cors"
import express from "express";
import { configDotenv } from "dotenv";
import connectdb from "./db.js";
import login from "./controllers/login.js";
import signup from "./controllers/signup.js";
import cookieParser from "cookie-parser";
import VerifyUser from "./middleware/VerifyUser.js";
// import logout from "./controllers/logout.js";
import forgetpassword from "./controllers/forgotPassword.js";
import resetpassword from "./controllers/resetPassword.js";
import getuser from "./controllers/getuser.js";


const app=express();
configDotenv();
const PORT=process.env.PORT||8000;
connectdb();

app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true,
    methods:["GET","POST"]
}));

app.use(express.json());
app.use(cookieParser());

app.get('/home',VerifyUser,(req,res)=>{
    res.json("You are verified !!")
});

app.post('/api/login',login);
app.post('/api/signup',signup);
app.post('/api/logout',(req,res)=>{
    res.clearCookie("token");
    res.json("success")
});
app.post('/api/forgetpassword',forgetpassword);
app.post('/api/resetpassword/:id/:token',resetpassword);
app.get('/api/getuser/:id',getuser);

app.listen(PORT,()=>{
    console.log(`PORT ${PORT} running Successfully !!`);
});