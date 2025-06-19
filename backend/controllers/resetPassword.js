import UserModel from "../Models/UserModel.js";
import { configDotenv } from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

configDotenv();

const resetpassword=async (req,res)=>{
    const {id,token}=req.params;
    const {password}=req.body;
    try{
        const verifyToken=jwt.verify(token,process.env.SECRET);
        if(id === verifyToken.id){
            const hashPassword= await bcrypt.hash(password,10);
            UserModel.findByIdAndUpdate({_id:id},{password:hashPassword})
            .then(result=>{
                res.json("Password Reset Successfull");
            })
            .catch(err=>{
                console.log(err.message);
            })
        }else{
            return res.json("Invalid User !!");
        }
    }catch(err){
        console.log(err.message);
    }
}

export default resetpassword;