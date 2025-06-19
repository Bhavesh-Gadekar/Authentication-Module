import jwt from "jsonwebtoken"
import { configDotenv } from "dotenv";
configDotenv();

const SECRET=process.env.SECRET;
const VerifyUser=(req,res,next)=>{

    const  token=req.cookies.token;
    if(!token){
        res.json("Token not found !!");
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