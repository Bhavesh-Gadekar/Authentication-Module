import UserModel from "../Models/UserModel.js";
import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

configDotenv();

const forgetpassword = async (req, res) => {

    const { email } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json("User does not exist");
        }
        const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: "5m" });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: "Reset your password",
            text: `Click this link to reset your password: http://localhost:5173/resetpassword/${user._id}/${token}`,
            html: `
                <p>Hi ${user.name || ''},</p>
                <p>Click below to reset your password:</p>
                <a href="http://localhost:5173/resetpassword/${user._id}/${token}">
                Reset Password</a>
                <p>This link expires in 1 hour.</p>
            `,
        });

        // console.log("Email sent:", info.messageId);
        console.log("Email sent !!")
        res.json("Email sent !!");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json("Internal server error");
    }
};

export default forgetpassword;
