import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import UserModel from "../Models/UserModel.js";

configDotenv();

const login = async (req, res) => {
    const { email, password } = req.body;
    const SECRET=process.env.SECRET;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            const verifyUser = await bcrypt.compare(password, user.password);
            if (verifyUser) {
                const token=jwt.sign({email:user.email},SECRET,{expiresIn:"1hr"});
                res.cookie("token", token);
                res.json("success");
                // console.log("User Verified . Password is correct !!");
            } else {
                res.json("Incorrect password")
            }
        }else{
            res.json("No user found");
        }
    } catch (err) {
        console.log(err.message);
    }
}

export default login;