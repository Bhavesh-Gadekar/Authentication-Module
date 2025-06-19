import bcrypt from "bcrypt"
import UserModel from "../Models/UserModel.js"

const signup= async(req,res)=>{
    const {firstname,lastname,email,password}=req.body;
    try{
    const duplicate=await UserModel.findOne({email});
    if(duplicate){
        res.json("Account Already Exists !!")
    }
    const hashPassword=await bcrypt.hash(password,10);
    await UserModel.create({firstname,lastname,email,password:hashPassword});
    res.json("success");
    }catch(err){
        res.json(err)
        console.log(err.message);
    }

}

export default signup;