import jwt from "jsonwebtoken"
import { configDotenv } from "dotenv";
configDotenv();

const SECRET=process.env.SECRET;
const VerifyUser=(req,res,next)=>{
    const  token=req.cookies.token;
    if(!token){
        // res.status(404).json("Token not found !!");
        res.json("Notoken");
    }
    jwt.verify(token,SECRET,(err,decoded)=>{
        if(err){
            res.json(err.message);
        }else{
            req.user=decoded;
            next();
        }
    });

}

export default VerifyUser;