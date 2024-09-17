import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "../models/users.js";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();


const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({id}, 'secretcharacters', {
        expiresIn: maxAge,
    })
} 


export const Login = async (req, res) => {
    const {email, password} = req.body 

    try{
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({ message: "Invalid email or password" }); 
        }
        // Generate JWT token
        const token = createToken(user._id);
        res.cookie('jwt', token, {maxAge: 3*24*60*60*1000});

        // Return token to client
        res.json({token, mssg: "Login Successful"})
    } catch(error){
        console.error(error)
        res.status(500).json({mssg: "Server Error!!"})

    }

}


export const SignUp = async (req, res) => {

    const { email, password, userName } = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
           return res.status(400).json({mssg: "User already Exists!"})
        
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        //create user
        const newUser = await User.create({ userName, email, password: hashedPassword });
        const token = createToken(newUser._id);
        res.cookie('jwt', token, {maxAge: maxAge*1000});
    
        res.status(201).json({mssg: "User registered successfully!"})
        
    } catch (error) {
        console.error(error.message)
        res.status(500).json({mssg: "Server error!"})
        
    }

}


export const logout = (req, res) => {
        res.cookie('jwt', '', { maxAge: 1 });
        res.redirect('/');
      }