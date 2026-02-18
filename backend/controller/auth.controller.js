import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { OAuth2Client } from "google-auth-library";

export const register = async (req,res) => {
    try {
        const {firstName, lastName, email, password} = req.body;

        if(!firstName || !lastName || !email || !password){
            return res.status(404).json({
                success:false,
                message:"All fields are required"
            });
        }

        const userExists = await User.findOne({email});
        if(userExists) {
            return res.status(400).json({
                success:false,
                message:"User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password:hashedPassword
        });

        const token = jwt.sign({userId:newUser._id}, process.env.JWT_SECRET, {expiresIn:'1d'});

        res.status(201).json({
            success:true,
            message:"User registered successfully",
            token
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const login = async (req,res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({
                success:false,
                message:"Email and password are required"
            });
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }

        if(user.authProvider === "google") {
            return res.status(400).json({
                success:false,
                message:"Please login with Google"
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch) {
            return res.status(401).json({
                success:false,
                message:"Invalid credentials"
            })
        };

        const token = jwt.sign({userId:user._id}, process.env.JWT_SECRET,{expiresIn:'1d'});

        res.status(200).json({
            success:true, 
            message:"User logged in successfully", 
            token,
            user:{
                id:user._id,
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                role:user.role
            }
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const getAllUsers = async (req,res) => {
    try {
        const users = await User.find().sort({createdAt:-1});
        if(!users) {
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }

        res.status(200).json({
            success:true,
            users
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// google authentication
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuth = async (req,res) => {
    try {
        
        const {credential} = req.body;

        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const {email, given_name, family_name} = ticket.getPayload();

        let user = await User.findOne({email});

        if(!user) {
            user = await User.create({
                firstName: given_name,
                lastName: family_name,
                email,
                authProvider:"google",
            });
        }

        const jwtToken = jwt.sign(
            {id:user._id, role:user.role},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        );

        res.json({token: jwtToken, user});

    } catch (error) {
        res.status(401).json({
            success:false,
            message:"google authentication failed"
        });
    }
};
